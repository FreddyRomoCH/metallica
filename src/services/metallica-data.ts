export const albums = [
    {
      id: 1,
      title: "Kill 'Em All",
      year: 1983,
      cover: "public/images/kill-em-all.jpg",
    },
    {
      id: 2,
      title: "Ride the Lightning",
      year: 1984,
      cover: "public/images/ride-the-lightning.png",
    },
    {
      id: 3,
      title: "Master of Puppets",
      year: 1986,
      cover: "public/images/master-of-puppets.jpg",
    },
    {
      id: 4,
      title: "...And Justice for All",
      year: 1988,
      cover: "public/images/and-justice-for-all.jpg",
    },
    {
      id: 5,
      title: "Metallica",
      year: 1991,
      cover: "public/images/black-album.jpg",
    },
    {
      id: 6,
      title: "Load",
      year: 1996,
      cover: "public/images/load.jpg",
    },
    {
      id: 7,
      title: "Reload",
      year: 1997,
      cover: "public/images/reload.jpg",
    },
    {
      id: 8,
      title: "St. Anger",
      year: 2003,
      cover: "public/images/st-anger.jpg",
    },
    {
      id: 9,
      title: "Death Magnetic",
      year: 2008,
      cover: "public/images/death-magnetic.jpg",
    },
    {
      id: 10,
      title: "Hardwired... to Self-Destruct",
      year: 2016,
      cover: "public/images/hardwired.jpeg",
    },
    {
      id: 11,
      title: "72 Seasons",
      year: 2023,
      cover: "public/images/72-seasons.jpg",
    },
  ];

  const metallicaMBID = "65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab";

  export const fetchLastTwoConcerts = async () => {
    const response = await fetch(`https://api.setlist.fm/rest/1.0/artist/${metallicaMBID}/setlists?p=1`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'x-api-key': 'XA-AHc_5pX09KcF7kWOTJzQLiB--an5es5an'
      }
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data.setlist.slice(0, 2); // Get the last 2 results
  }