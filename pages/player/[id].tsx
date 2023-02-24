import { useRouter } from 'next/router';
import { Player } from '../../redux/api';

interface PlayerPageProps {
  player: Player;
}

export default function PlayerPage({ player }: PlayerPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     hola
      
    </div>
  );
}