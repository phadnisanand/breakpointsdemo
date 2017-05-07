/**
 * @file
 * Provides responsive behaviors to HTML details elements.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Initializes the responsive behaviors for details elements.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the responsive behavior to status report specific details elements.
   */
  Drupal.behaviors.breakpoints = {
    attach: function (context, settings) {
		var breakpoints = settings.responsive.breakpoints;
		   Object.keys(breakpoints).forEach(function (bp) {
			
		   var breakpointsmatch =  window.matchMedia(breakpoints[bp]);
		   
		   if(breakpointsmatch.matches)
		   {
			   
			   alert(bp);
		   }

		});
    }
  };
  

})(jQuery, Drupal);
