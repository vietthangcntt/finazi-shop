<?php get_header(); ?>
 
<section class="erro-content">
        <div class="container">
        	<h2 class="erro-title"> <?php echo esc_html ( '404' , 'finazi' ); ?> </h2>
			<h4> <?php echo esc_html ('The requested page cannot be found!' , 'finazi' ); ?> </h4>
			<p> <?php echo esc_html('The page you are looking for was moved, removed, renamed or might never existed.' , 'finazi'); ?> </p>
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>"> HOME PAGE  </a>
		</div>
</section>
<?php get_footer(); ?>