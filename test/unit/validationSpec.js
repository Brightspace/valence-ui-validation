( function() {
	'use strict';

	describe( 'vui-validation', function() {

		beforeEach( function () {
			jasmine.addMatchers( vui.jasmine.dom.matchers );
		} );

		describe( 'selectors', function() {

			it( 'defines a ".vui-validation" selector', function() {
				expect( document ).toHaveCssSelector( '.vui-validation' );
			} );

		} );

	} );

} )();
