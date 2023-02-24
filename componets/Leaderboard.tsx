import Link from 'next/link';
import React from 'react';
import { Player,useGetLeaderboardQuery } from '../redux/api';

function Leaderboard(): JSX.Element {
  const { data, isLoading, error} = useGetLeaderboardQuery();
 
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: erro</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>leaderboardRank</th>
          <th>gameName</th>
          <th> tagLine</th>
          <th>numberOfWins</th>
          <th>rankedRating</th>
          <th>competitiveTier</th>
          <th>PlayerCardID</th>
          <th>TitleID</th>
          <th>puuid</th>
          <th>IsBanned</th>
          <th>IsAnonymized</th>

        </tr>
      </thead>
      <tbody>
        {data?.players.map((player:Player) => (
         
          <tr key={player.puuid}>
            <td>{player.leaderboardRank}</td>
            <td>{player.gameName}</td>
            <td> {player.tagLine}</td>
            <td>{player.numberOfWins}</td>
            <td>{player.rankedRating}</td>
            <td>{player.competitiveTier}</td>
            <td>{player.PlayerCardID}</td>
            <td>{player.TitleID}</td>
            <td>{player.puuid}</td>
            <td>{player.IsBanned ? "true" : "false"}</td>
            <td>{player.IsAnonymized ? "true" : "false"}</td>
            
          <button>
         <Link href={`/players/${player.gameName}`}> ir </Link>
          </button>
          </tr>
         
        ))}
      </tbody>
    </table>
  );
}

export default Leaderboard;

