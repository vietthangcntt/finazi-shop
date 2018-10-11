
<?php get_header(); ?>
	<div class="container">
		<div class="row">
			<div class="<?php echo !is_product() ? ('col-md-9 woocommerce_content') : ('col-md-12 woocommerce_content'); ?>">
				<?php woocommerce_content(); ?>

			</div>
			<?php if( !is_product()){ ?>
				<div class="col-md-3">
				 <?php
				 	if( is_active_sidebar('main-sidebar__woocommerce') ){
				 		dynamic_sidebar('main-sidebar__woocommerce');
				 	}
				 	else{
				 		_e('please setting sidebar','finazi');
				 	}
				  ?>
			</div>
			<?php }
			 ?>

		</div>
	</div>
<?php get_footer(); ?>
