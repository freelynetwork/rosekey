/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { Module } from '@nestjs/common';
import { EndpointsModule } from '@/server/api/EndpointsModule.js';
import { CoreModule } from '@/core/CoreModule.js';
import { ApiCallService } from './api/ApiCallService.js';
import { FileServerService } from './FileServerService.js';
import { NodeinfoServerService } from './NodeinfoServerService.js';
import { ServerService } from './ServerService.js';
import { WellKnownServerService } from './WellKnownServerService.js';
import { GetterService } from './api/GetterService.js';
import { ChannelsService } from './api/stream/ChannelsService.js';
import { ActivityPubServerService } from './ActivityPubServerService.js';
import { ApiLoggerService } from './api/ApiLoggerService.js';
import { ApiServerService } from './api/ApiServerService.js';
import { AuthenticateService } from './api/AuthenticateService.js';
import { RateLimiterService } from './api/RateLimiterService.js';
import { SigninApiService } from './api/SigninApiService.js';
import { SigninService } from './api/SigninService.js';
import { SignupApiService } from './api/SignupApiService.js';
import { StreamingApiServerService } from './api/StreamingApiServerService.js';
import { OpenApiServerService } from './api/openapi/OpenApiServerService.js';
import { ClientServerService } from './web/ClientServerService.js';
import { FeedService } from './web/FeedService.js';
import { UrlPreviewService } from './web/UrlPreviewService.js';
import { ClientLoggerService } from './web/ClientLoggerService.js';
import { OAuth2ProviderService } from './oauth/OAuth2ProviderService.js';

import { MainChannelService } from './api/stream/channels/main.js';
import { AdminChannelService } from './api/stream/channels/admin.js';
import { AntennaChannelService } from './api/stream/channels/antenna.js';
import { ChannelChannelService } from './api/stream/channels/channel.js';
import { DriveChannelService } from './api/stream/channels/drive.js';
import { GlobalTimelineChannelService } from './api/stream/channels/global-timeline.js';
import { HashtagChannelService } from './api/stream/channels/hashtag.js';
import { HomeTimelineChannelService } from './api/stream/channels/home-timeline.js';
import { HybridTimelineChannelService } from './api/stream/channels/hybrid-timeline.js';
import { LocalTimelineChannelService } from './api/stream/channels/local-timeline.js';
import { MessagingIndexChannelService } from './api/stream/channels/messaging-index.js';
import { MessagingChannelService } from './api/stream/channels/messaging.js';
import { QueueStatsChannelService } from './api/stream/channels/queue-stats.js';
import { ServerStatsChannelService } from './api/stream/channels/server-stats.js';
import { UserListChannelService } from './api/stream/channels/user-list.js';
import { RoleTimelineChannelService } from './api/stream/channels/role-timeline.js';
import { ReversiChannelService } from './api/stream/channels/reversi.js';
import { ReversiGameChannelService } from './api/stream/channels/reversi-game.js';

@Module({
	imports: [
		EndpointsModule,
		CoreModule,
	],
	providers: [
		ClientServerService,			ClientLog		rService,
		FeedS		vice,
		UrlP	evi	wService,
		A		ivityPubServerService				FileServerService,
		NodeinfoServe		ervice,
		ServerSer		ce,
		WellKnownServerServi		,
		GetterService,
		ChannelsService,
		ApiC		lService,
		Api		ggerService,
		ApiServer		rvice,
		Authen		cateService,
		Ra		LimiterService,
		SigninApiService,
		SigninService,
		S		nupApiService,
		Stre		ingApiServerService,			MainChannelServic
		AdminChannel		rvice,
		AntennaCh		nelService,
		ChannelChanne		ervice,
		DriveChann		Service,
		GlobalTime		neChannelService,
		Has		agChannelService,
		Rol		imelineChannelService				ReversiChannelService,
		Rev		siGameChannelService,
			omeTimelineChannelService,
			ybridTimelineChannelSer		ce,
		LocalTimelineChannelS		vice,
		MessagingIndexChanne		ervice,
		MessagingChannelServ		e,
		QueueStatsChannelService				ServerStatsChannelService,
			serListChannelService,
				enApiServerService,
		OAut		ProviderService,
	],
	expor		: [
		ServerService,
	],		)
export class ServerM		ule {}
