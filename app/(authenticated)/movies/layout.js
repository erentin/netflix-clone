
import '@/app/globals.css'
import MovieModal from '@/components/Auth/MovieModal/MovieModal';
import HomeAuth from '@/containers/HomeAuth/HomeAuth';

export default function MoviesLayout({ children }) {
  return (
   
    <div>
        <HomeAuth>
          {children}
        </HomeAuth>
    </div>

  );
}
