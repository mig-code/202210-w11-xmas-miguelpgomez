import { useEffect } from 'react';
import { FavoriteList } from '../components/favorite.list/favorite.list';
import { useRobots } from '../../../core/components/hooks/useRobots';

export function FavoritePage() {
    const { robots, handleDelete, handleFavorite, handleLoad } = useRobots();
    useEffect(() => {
        handleLoad();
    }, [handleLoad]);
    return (
        <section className="favorite-page">
            <FavoriteList
                handleDelete={handleDelete}
                handleFavorite={handleFavorite}
                robots={robots}
            ></FavoriteList>
        </section>
    );
}
