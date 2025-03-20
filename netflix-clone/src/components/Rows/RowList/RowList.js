import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";
const RowList = () => {
  return (
    <div>
      <Row
        title={`Netflix Original`}
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row />
      <Row title={`Top Rated`} fetchUrl={requests.fetchTopRatedMovies} />{" "}
      <Row title={`Trending Movies`} fetchUrl={requests.fetchTrending} />
      <Row title={`Action Movies`} fetchUrl={requests.fetchActionMovies} />
      <Row title={`Comedy Movies`} fetchUrl={requests.fetchComedyMovies} />
      <Row title={`Horror Movies`} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={`Romance Movies`} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={`Documentaries`} fetchUrl={requests.fetchDocumentaries} />
      <Row title={`Tv Shows`} fetchUrl={requests.fetchTvShows} />
    </div>
  );
};

export default RowList;
