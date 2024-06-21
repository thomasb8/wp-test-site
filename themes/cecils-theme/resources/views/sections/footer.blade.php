<footer class="bg-gray-400 text-white font-pill">
  <div class="container mx-auto">
    <div class="flex justify-between items-start pt-14 pb-24 md:pb-8">
      <img src="@asset('/images/Cecils_LogoIcon.svg')" class="w-[70px] md:w-[105px] " alt="Logo" />

      @if (has_nav_menu('primary_navigation'))
        <nav class="text-right" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
        {!! wp_nav_menu([
          'theme_location' => 'primary_navigation',
          'menu_class' => 'flex flex-col md:flex-row gap-1 md:gap-8 font-black text-[1.125rem]',
          'container' => '',
          'echo' => false
        ]) !!}
        </nav>
    @endif

    </div>
    <div class="text-base font-sans w-full text-center md:text-right relative md:-top-14 pb-16 md:pb-0">
      ©{{date('Y')}} Cecil’s Concrete
      <span class="hidden md:inline"> / </span>
      <br class="md:hidden" />
      <a href="/privacy-policy" target="_blank">Privacy Policy</a>
    </div>
  </div>
</footer>
