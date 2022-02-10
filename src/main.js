const BASE_API = "https://graph.instagram.com/me";
const ACCESS_TOKEN =
  "IGQVJVbmpRNGwyaFpBWTBLdFdCaTlYQ3BTdmxxbGIzNldfMDNUTnpfZAFpKZAk1qZAnpIMWpPWWdTRWdyc2xONjlNTFJ3TWFubmM0Qm1lNjI0TVhzZAkoxU3g4S3BrODRKWDFJdU9BMktiU25rclZAqMmhra2VpVWN1V2ZAjM0lr";

const username = document.getElementById("username");
const posts = document.getElementById("posts");
const photos = document.getElementById("photos");

async function getUserInfo() {
  const response = await fetch(
    `${BASE_API}?fields=username,media_count&access_token=${ACCESS_TOKEN}`
  );
  const userInfo = await response.json();
  console.log(userInfo);
  username.innerHTML = userInfo.username;
  posts.innerHTML = userInfo.media_count;
  return userInfo;
}

getUserInfo();

async function getUserMediaInfo() {
  const response = await fetch(
    `${BASE_API}/media?fields=id,media_url&access_token=${ACCESS_TOKEN}`
  );
  const userMediaInfo = await response.json();
  console.log(userMediaInfo);
  return userMediaInfo;
}

getUserMediaInfo().then((media) => {
  media.data.map((mediaInfo) => {
    const img = document.createElement("img");
    img.style.width = "100px";
    img.src = mediaInfo.media_url;
    photos.appendChild(img);
  });
});
