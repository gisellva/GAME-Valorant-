import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Player {
  PlayerCardID: string;
  TitleID: string;
  IsBanned: boolean;
  IsAnonymized: boolean;
  puuid: string;
  gameName: string;
  tagLine: string;
  leaderboardRank: number;
  rankedRating: number;
  numberOfWins: number;
  competitiveTier: number;
}

export interface Leaderboard {
  
  players: Player[];
}

interface Match {
  region: string;
  name: string;
  tag: string;
}

export const valorantApi = createApi({
  reducerPath: 'valorantApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.henrikdev.xyz/valorant' }),
  endpoints: (builder) => ({
    getLeaderboard: builder.query<Leaderboard, void>({
      query: () => '/v2/leaderboard/EU?start=1500',
    }),
    getMatch: builder.query<Match, string>({
      query: (regionAndName) => `matches/${regionAndName}`,
    }),
  }),
});

export const { useGetLeaderboardQuery } = valorantApi

export const setSelectedPlayer = (player: Player) => (dispatch: any) => {
  dispatch({ type: 'SET_SELECTED_PLAYER', payload: player });
};
