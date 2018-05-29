import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <header class="row">
        <!--<nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li routerLinkActive="active"><a [routerLink]="['/mainpage']">Main</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/auth']">Authentication</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/map']">Map</a></li>

                    <li routerLinkActive="deactive"><a [routerLink]="['/auth/logout']">logout</a></li>
                </ul>
            </nav> -->    <!-- Navigation -->
            <nav id="siteNav" class="navbar navbar-default navbar-fixed-top" role="navigation">
                <div class="container">
                    <!-- Logo and responsive toggle -->
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <!-- Navbar links -->
                    <div class="collapse navbar-collapse" id="navbar">
                        <ul class="nav navbar-nav navbar-right">
                            <li class="active">
                                <a href="/mainpage">Home</a>
                            </li>
                            <li>
                                <a href="/map">Map</a>
                            </li>
                            <li class="dropdown">
                                <a href="/auth/signin" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Login<span class="caret"></span></a>
                                <ul class="dropdown-menu" aria-labelledby="about-us">
                                    <li><a href="/auth/signup">Signup</a></li>
                                    <li><a href="#">Logout</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                        
                    </div><!-- /.navbar-collapse -->
                </div><!-- /.container -->
            </nav>
        </header>
    `
})
export class HeaderComponent {

}

//original lines
/*                    <li routerLinkActive="active"><a [routerLink]="['/messages']">Messenger</a></li>
<li routerLinkActive="active"><a [routerLink]="['/auth']">Authentication</a></li>
<li routerLinkActive="active"><a [routerLink]="['/map']">Map</a></li>  */