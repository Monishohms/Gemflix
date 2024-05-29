import { useDispatch } from "react-redux";
import { API_options } from "../utils/Constant";
import { addBgTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

export const useBgTrailer = (movie_id) => {
  // Fetch Trailer Vedio From API & updating it in a store with trailer vedio data

  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movie_id + "/videos",
      API_options
    );
    const json = await data.json();

    const filteredMovie = json?.results?.filter(
      (vid) => vid?.type === "Trailer"
    );

    const trailer = filteredMovie.length ? filteredMovie[0] : json.results[0];

    dispatch(addBgTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return <div>useBgTrailer</div>;
};

export default useBgTrailer;
// {
//   "id": 823464,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "A Titanic Fight Among the Pyramids",
//       "key": "pwPpguuFkIs",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2024-05-21T14:00:41.000Z",
//       "id": "664df669e9b4172c3413fac5"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Extended Preview",
//       "key": "TYljxL4WeRo",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2024-05-14T15:00:22.000Z",
//       "id": "66442227a8faaaac103d257c"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "GxK: Day of Reckoning",
//       "key": "Przzgs0ljss",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2024-05-14T14:00:49.000Z",
//       "id": "664422730b11436c3b583765"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "\"Is that a mini Kong\" Clip",
//       "key": "_OZURpWoouI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2024-05-13T13:41:26.000Z",
//       "id": "66444c003f00a3a89b5bc8bb"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Epic Thrill Ride Featurette",
//       "key": "3N84gAPPKXE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2024-03-29T14:15:15.000Z",
//       "id": "661e673120af77014a3d1be4"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Director on Director Featurette",
//       "key": "UDiIfaWVxwA",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2024-03-29T10:03:41.000Z",
//       "id": "6607b1dd021cee014947986f"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "BTS Featurette",
//       "key": "8C1tdXxPAWs",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2024-03-28T19:00:04.000Z",
//       "id": "661a5e535ff34e0163590abb"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Cast React to London Takeover",
//       "key": "MO-1_Mm8gbI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2024-03-27T09:18:18.000Z",
//       "id": "6605670baafebd01631770aa"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "London Titan Takeover",
//       "key": "PAp2-TXSBwc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2024-03-25T18:25:50.000Z",
//       "id": "6603247b0929f6017e9eef61"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official IMAX® Interview",
//       "key": "m5wyvKMFFxg",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2024-03-20T23:36:00.000Z",
//       "id": "661a5e1daf6e94014aecb71c"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Tickets on Sale Trailer",
//       "key": "XeDbyVODQ5M",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2024-03-13T17:00:24.000Z",
//       "id": "65fa59007f0540017c079280"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Spot",
//       "key": "Teg4Ta0vWjE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-03-08T12:39:56.000Z",
//       "id": "65eb0d93bdc34c01848848e8"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Spot",
//       "key": "3ulliGqm28c",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-03-08T12:37:45.000Z",
//       "id": "65eb0e59e62719017c5b6bfe"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Spot",
//       "key": "-J_E4ASRbc0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-03-05T10:26:07.000Z",
//       "id": "65ea5ee9d100b601854d9008"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Spot",
//       "key": "9eB0QFpi5X4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-03-01T12:21:44.000Z",
//       "id": "65e1d85851f99a00e6561a3b"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Spot",
//       "key": "Eh6b6bkMMuI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-03-01T12:20:22.000Z",
//       "id": "65e1d89e9dee58017c7e3c11"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer 2",
//       "key": "qqrpMRDuPfc",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2024-02-14T17:00:47.000Z",
//       "id": "65ccf7e2e210230185c421e2"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "lV1OOlGwExM",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2023-12-03T20:50:56.000Z",
//       "id": "656ced1b56846300cdb8fc54"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Title Reveal",
//       "key": "1QLQCfw5lAM",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-04-19T16:00:23.000Z",
//       "id": "644020f6b0ba7e052713402d"
//     }
//   ]
// }
