import React from "react";
import { gql } from "@apollo/client";
import { useQuery, useLazyQuery } from "@apollo/client/react";

const Getdoog = () => {
  const breed = "new_dog_breed";
  const GET_DOGS = gql`
    query GetDogs {
      dogs {
        id
        breed
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_DOGS);

  console.log(data);
  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      {data?.dog && <img src={data.dog.displayImage} />}
      {/* <button onClick={() => getDog({ variables: { breed: "bulldog" } })}>
        Click me!
      </button> */}
    </div>
  );
};

export default Getdoog;
