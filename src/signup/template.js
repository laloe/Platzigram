var yo = require('yo-yo');

module.exports = yo`<div class="container">
                <div class="row">
                    <div class="col s10 push-s1">
                        <div class="row">
                            <div class="col m5 hide-on-small-only">
                                <img class="iphone" src="cel.png" alt="">
                            </div>
                            <div class="col s12 m7">
                                <div class="row">
                                    <div class="signup-box">
                                        <h1 class="platzigram">Platzigram</h1>
                                        <form class="signup-form">
                                            <h2>Registrate</h2>
                                            <div class="section">
                                                <a class="btn btn-fb hide-on-small-only" href="">Iniciar sesión con facebook</a>
                                                <a class="btn btn-fb hide-on-med-and-up" href="">Iniciar Sesión</a>
                                            </div>
                                            <div class="divider"></div>
                                            <div class="section">
                                                <input type="email" name="email" placeholder="Correo electrónico" />
                                                <input type="text" name="name" placeholder="Nombre completo" />
                                                <input type="text" name="username" placeholder="Usuario" />
                                                <input type="password" name="password" placeholder="Contraseña" />
                                                <button class="btn waves-effect waves-light btn-signup" type="submit">Registrate</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="login-box">
                                        ¿Tines una cuenta? <a href="/sigin">Entrar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`