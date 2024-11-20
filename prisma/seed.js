const prisma = require("../prisma");
const seed = async () => {
  const users = []
  for (let i = 0; i<5; i++){
    users.push({
      username : `user${i+1}`
    })
  }
  const userData = await prisma.user.createManyAndReturn({data: users})
  const tracks = []
  for (let k = 0; k<20; k++){
    users.push({
      username : `track ${j+1}`
    })
  }
  const trackData = await prisma.user.createManyAndReturn({data: tracks})
  // const playlists = []
  // for (let j = 0; j<5; j++){
  //   const connectedUsers = []
  //   Math.floor((Math.random()*5))

  //   await prisma.playlist.create({
  //     data : {
  //       name : `paylist ${j}`,
  //       description : `description of playlist ${j}`,
  //       tracks : {connect : tracks},
  //       user : {connect : user}
  //       }
  //   })
  // }
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });