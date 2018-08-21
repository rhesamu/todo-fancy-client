const SERVER_URL = 'http://localhost:3000/api'

function statusChangeCallback(response) {
  if (response.status === 'connected') {
    // console.log(response.authResponse.accessToken)
    axios({
      method: 'post',
      url: `${SERVER_URL}/loginFB`,
      headers: { fbtoken: response.authResponse.accessToken }
    })
    .then(res => {
      localStorage.setItem("token", res.data.token);
      window.location.replace('index.html')
    })
    .catch(error => {
      $("#alertLogin").css("display","block").text("Login with facebook error")
    })
  } 
}
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
window.fbAsyncInit = function() {
  FB.init({
    appId      : '808874495981536',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  });
  // FB.getLoginStatus(function(response) {
  //   statusChangeCallback(response);
  // });
  
};
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));