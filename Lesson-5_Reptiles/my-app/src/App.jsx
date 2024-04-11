import useFetch from "react-fetch-hook";

import { Route, Routes } from "react-router-dom"; //Бібліотеки
import { useQuery, gql } from "@apollo/client";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";

import "./App.css";

const GET_LOCATIONS = gql`
  query GetLocations {
    collections {
      meta {
        pagination {
          page
          pageCount
        }
      }
      data {
        id
        attributes {
          title
          description
          favourite
          img {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default function App() {

  const { loading, error, data } = useQuery(GET_LOCATIONS);

  console.log(data?.collections.data.map(item => {
    
  }));

  return (
    <div className="wrapper">
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
