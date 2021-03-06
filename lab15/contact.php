<!DOCTYPE html>

<html lang="en">

<head>
    <title>Classic Cinema</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="leaflet.css"/>
    <script src="leaflet.js"></script>
    <script src="map.js"></script>
    <script src="jquery-3.6.0.min.js"></script>
</head>

<body>

<header>
    <h1>Classic Cinema</h1>
    <div id="user">
        <div id="login">
            <form id="loginForm">
                <label for="loginUser">Username: </label>
                <input type="text" name="loginUser" id="loginUser"><br>
                <label for="loginPassword">Password: </label>
                <input type="password" name="loginPassword" id="loginPassword"><br>
                <input type="submit" id="loginSubmit" value="Login">
            </form>
        </div>

        <div id="logout">
            <p>Welcome, <span id="logoutUser"></span></p>
            <form id="logoutForm">
                <input type="submit" id="logoutSubmit" value="Logout">
            </form>
        </div>
    </div>

    <nav>

        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="classic.html">Classics</a>
            <li><a href="scifi.html">SciFi</a>
            <li><a href="hitchcock.html">Hitchcock</a>
            <li>Contact</li>
            <li><a href="cart.html">Cart</a></li>
        </ul>


    </nav>
</header>


<main>
    <figure id="map">
    <img src="./images/map.png" alt="Map of Dunedin city centre"  width="680" height="484">

    </figure>

    <ul class="contact">
        <li>
            <h3>Central</h3>
            <p>
                101 The Octagon
            </p>
            <p>
                (03) 490 1234
            </p>
        </li>
        <li>
            <h3>South</h3>
            <p>
                789 Princes St
            </p>
            <p>
                (03) 490 2468
            </p>
        </li>
        <li>
            <h3>North</h3>
            <p>
                561 Great King St
            </p>
            <p>
                (03) 490 3579
            </p>
        </li>
    </ul>
</main>

<footer>
    <p>
        Classic Cinema is not a real store. No products are available, and no money will be accepted.
    <p>
        All images from <a href="http://commons.wikimedia.org/wiki/Main_Page">Wikimedia Commons</a> and are believed to
        be in the public domain.
    </p>
</footer>

</body>
</html>