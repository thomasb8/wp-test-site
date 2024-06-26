<header class="banner absolute left-0 top-0 w-full z-10">
  <div
    class="container mx-auto h-[7.25rem] flex justify-between items-center font-pill text-white font-semibold leading-none">
    <a class="brand" href="{{ home_url('/') }}">
      <img class="cecils-logo" src="@asset('images/Cecils Concrete_Logo._White.svg')" / alt="Cecils Logo">
    </a>
    <button class="nav-toggle">
      <span class="nav-toggle-icon"></span>
    </button>

    @if (has_nav_menu('primary_navigation'))
      <nav class="nav-primary hidden md:flex w-full justify-end"
        aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
        {!! wp_nav_menu([
      'theme_location' => 'primary_navigation',
      'menu_class' => 'flex flex-col md:flex-row gap-10 md:gap-4 lg:gap-14 justify-center md:justify-between items-center text-[22px] md:text-[1.25rem]',
      'container' => '',
      'items_wrap' => '<ul id="%1$s" class="%2$s>%3$s<a class="bg-light-blue px-4 py-3 rounded-full text-[18px] md:text-[1.25rem]" href="tel:(205) 480-2083">(205) 480-2083</a></ul>',
      'echo' => false
      ]) !!}
      </nav>
    @endif
  </div>
</header>
