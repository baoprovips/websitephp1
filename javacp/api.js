// const token = 'BQCMeDhIyQQKSnyWAnB1j8Bq_Poh8FbE0WifsbuZQsb-xxvQonc7hQh6cJ81aA7P0Bglm7QdrZKS3OlWcuAL4jFkGA50eyPSsBs1FTb7SlkcCVN4hYUTsFtY-3uwcDRG1Ax0ey2PtTfVzW7LBkleBHCUUJJwmb_QsriuSlqpvjSaWYZaDftyO74ZqBiuP0MYrsKSAfIVt9l-lDCUgnTxMmqhBPa6dDTeN-Yc_dZee9bdfhM1WIAMpOFjAXiK91xwMscdwbTjOlXsI_2_V8q7h_cC';
// // token hết hạn theo time 1 tiếng truy cập vào đường link https://developer.spotify.com/ tk:vuthebao2002@gmail.com mk:vtb28042002
// async function getTopSongs() {
//   try {
//     const response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=50', {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch top songs');
//     }

//     const data = await response.json();
//     const topSongs = data.items.map(item => ({
//       name: item.name,
//       artist: item.artists[0].name
      
//     }));
    

//     const recommendedTracksContainer = document.getElementById('top-songs');
//     topSongs.forEach(song => {
//       const listItem = document.createElement('div');
//       listItem.classList.add('cart_item');
//       const trackPreview = document.createElement('audio');
//       trackPreview.classList.add('track-preview');
//       trackPreview.controls = true;
//       trackPreview.src = song.preview_url;
//       listItem.textContent = `${song.name} - ${song.artist}`;
//       recommendedTracksContainer.appendChild(listItem);
      
//     });

//     document.querySelector('#top-songs').appendChild(list);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }
// setTimeout(getTopSongs(),10000)
// Tạo biến lưu trữ token key
let token = 'BQD22myUYgyKMkEo3OdvrCRBfpUrmssazOHBXCTFvt5T3jyfvDiprXQvmsZNZ_pBGc9dDrAMiG2LoaP_UXp7JjO7pMK4iSBOVFGbUFg9Mu09MmTOy-DRv9SAhzlj56c7nxfwNDwmoV61ambGgKUPqXRXlvG7Gd8abTRkz6DMf53xB71_-WCRmgLCORdxPUESeAoEcul1JR7M8NT1_7TRvCeVjqKJwz1qOKzJl2yQKUpCM2AnKL7jkCrSuKAKGWmtJ3G6VbxSaOJHv38Mkjew5pfx';

// Function để gửi yêu cầu API sử dụng token key
async function fetchWebApi(endpoint, method) {
  const res = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method
  });
  return await res.json();
}

// Function để lấy danh sách top bài hát
async function getTopTracks() {
  const response = await fetchWebApi('me/top/tracks?limit=10', 'GET');
  return response.items;
}

// Function để hiển thị danh sách top bài hát và thêm phần nghe bài hát trực tiếp
async function displayTopTracks() {
  const topTracks = await getTopTracks();
  const topTracksContainer = document.getElementById('top-songs');

  topTracks.forEach((track, index) => {
    const trackItem = document.createElement('div');
    trackItem.classList.add('cart_item');

    const trackRank = document.createElement('div');
    trackRank.classList.add('track-rank');
    trackRank.textContent = index + 1;

    const trackName = document.createElement('div');
    trackName.classList.add('track-name');
    trackName.textContent = track.name;

    const trackArtists = document.createElement('div');
    trackArtists.classList.add('track-artists');
    trackArtists.textContent = track.artists.map(artist => artist.name).join(', ');

    const trackPreview = document.createElement('audio');
    trackPreview.classList.add('track-preview');
    trackPreview.controls = true;
    trackPreview.src = track.preview_url;

    trackItem.appendChild(trackRank);
    trackItem.appendChild(trackName);
    trackItem.appendChild(trackArtists);
    trackItem.appendChild(trackPreview);

    topTracksContainer.appendChild(trackItem);
  });
}

// Gọi hàm hiển thị danh sách top bài hát và phần nghe bài hát trực tiếp
displayTopTracks();
