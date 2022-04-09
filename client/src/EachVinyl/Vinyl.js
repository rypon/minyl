import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

function Vinyl({ albumCollection }) {
  const [vinyl, setVinyl] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/albums/${id}`)
      .then((r) => r.json())
      .then((data) => setVinyl(data));
  }, [id]);

  console.log(vinyl);

  return <div>{vinyl?.album_name}</div>;
}

export default Vinyl;
