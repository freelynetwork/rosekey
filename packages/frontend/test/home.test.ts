import { afterEach, assert, describe, test } from 'vitest';
import { cleanup, render, type RenderResult } from '@testing-library/vue';
import './init';
import type * as Misskey from 'cherrypick-js';
import { directives } from '@/directives/index.js';
import { components } from '@/components/index.js';
import XHome from '@/pages/user/home.vue';
import 'intersection-observer';

describe('XHome', () => {
    const renderHome = (user: Partial<Misskey.entities.UserDetailed>): RenderResult => {
        return render(XHome, {
            props: { user, disableNotes: true },
            global: { directives, components },
        });
    };

    afterEach(() => {
        cleanup();
    });

    test('Should render the remote caution when user.host exists', async () => {
        const home = renderHome({
            id: 'blobcat',
            name: 'blobcat',
            host: 'example.com',
            uri: 'https://example.com/@user',
            url: 'https://example.com/@user/profile',
            roles: [],
            createdAt: '1970-01-01T00:00:00.000Z',
            fields: [],
            pinnedNotes: [],
            avatarUrl: 'https://example.com',
            avatarDecorations: [],
        });

        const anchor = home.container.querySelector<HTMLAnchorElement>('a[href^="https://example.com/"]');
        assert.exists(anchor, 'anchor to the remote exists');
        assert.strictEqual(anchor?.href, 'https://example.com/@user/profile');

        if (anchor?.parentElement) {
            assert.ok(anchor.parentElement.classList.contains('warn'), 'the parent is a warning');
        } else {
            assert.fail('parent element is null');
        }
    });

    test('The remote caution should fall back to uri if url is null', async () => {
        const home = renderHome({
            id: 'blobcat',
            name: 'blobcat',
            host: 'example.com',
            uri: 'https://example.com/@user',
            url: null,
            roles: [],
            createdAt: '1970-01-01T00:00:00.000Z',
            fields: [],
            pinnedNotes: [],
            avatarUrl: 'https://example.com',
            avatarDecorations: [],
        });

        const anchor = home.container.querySelector<HTMLAnchorElement>('a[href^="https://example.com/"]');
        assert.exists(anchor, 'anchor to the remote exists');
        assert.strictEqual(anchor?.href, 'https://example.com/@user');
    });
});