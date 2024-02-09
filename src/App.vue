<script setup>
</script>
<template>
    <div class="lg:container mx-auto grid grid-cols-12 gap-0">
      <nav class="col-span-12">
            <div class="navbar bg-base-100">
              <div class="navbar-start">
                <div class="dropdown">
                  <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                  <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Intro</a></li>
                    <li><a>Skills</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Blog</a></li>
                  </ul>
                </div>
                <a class="btn btn-ghost text-sm lg:text-xl text-primary">@claudiainbytes</a>
              </div>
              <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li><a>Intro</a></li>
                    <li><a>Skills</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Blog</a></li>
                </ul>
              </div>
              <div class="navbar-end">
                <a class="social-media-icon-link"><i class="fa-solid fa-moon"></i></a>
              </div>
            </div>
      </nav>
      <header class="col-span-12 lg:col-span-4 p-4">
        <div class="w-full h-full flex flex-col justify-start">
          <div class="w-full text-center p-4 pb-0 mb-4">
            <div class="avatar">
              <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://claudiainbytes.github.io/img/about.jpg" />
              </div>
            </div>
          </div>
          <div class="w-full text-center p-4 mb-0 prose max-w-none">
            <h1 class="my-0 text-primary">Claudia Estupiñán</h1>
            <h3 class="my-0">Front-end Web Developer</h3>
          </div>
          <div class="w-full text-center p-4 prose prose-a:text-lg max-w-none">
            <h4 class="my-0"><i class="fa-solid fa-location-dot text-lg mr-2 mb-2"></i>Bogotá, Colombia</h4>
            <a class="social-media-icon-link"><i class="fa-regular fa-envelope"></i></a>
            <a class="social-media-icon-link"><i class="fa-brands fa-linkedin"></i></a>
            <a class="social-media-icon-link"><i class="fa-brands fa-github"></i></a>
            <a class="social-media-icon-link"><i class="fa-brands fa-twitter"></i></a>
          </div>
        </div>  
      </header>
      <main class="col-span-12 lg:col-span-8 p-4 prose max-w-none">
        <p class="w-full">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
      </main>
      <footer class="col-span-12 p-4">
        <div class="flex flex-col w-full prose prose-p:text-sm max-w-none">
          <div class="divider divider-primary w-full my-0"></div>
          <p class="text-lg w-full my-1">Made with<i class="fa-solid fa-heart mx-2"></i>from scratch<i class="fa-solid fa-wand-magic-sparkles mx-2"></i>using<i class="fa-brands fa-vuejs mx-2"></i>Vue3 and<i class="fa-regular fa-sun mx-2"></i>daisyUI.</p>
        </div>  
      </footer>
    </div>
</template>
