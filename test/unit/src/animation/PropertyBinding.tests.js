/**
 * @author TristanVALCKE / https://github.com/Itee
 * @author Anonymous
 */
/* global QUnit */

import { PropertyBinding } from '../../../../src/animation/PropertyBinding';
import { BoxGeometry } from '../../../../src/geometries/BoxGeometry';
import { Mesh } from '../../../../src/objects/Mesh';
import { MeshBasicMaterial } from '../../../../src/materials/MeshBasicMaterial';

export default QUnit.module( 'Animation', () => {

	QUnit.module.todo( 'PropertyBinding', () => {

		// INSTANCING
		QUnit.test( "Instancing", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		// STATIC STUFF
		QUnit.test( "Composite", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		QUnit.test( "create", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		QUnit.test( 'sanitizeNodeName', ( assert ) => {

			assert.equal(
				PropertyBinding.sanitizeNodeName( 'valid-name-123_' ),
				'valid-name-123_',
				'Leaves valid name intact.'
			);

			assert.equal(
				PropertyBinding.sanitizeNodeName( 'space separated name 123_ -' ),
				'space_separated_name_123__-',
				'Replaces spaces with underscores.'
			);

			assert.equal(
				PropertyBinding.sanitizeNodeName( '"invalid" name %123%_' ),
				'invalid_name_123_',
				'Strips invalid characters.'
			);

		} );

		QUnit.test( 'parseTrackName', ( assert ) => {

			var paths = [

				[
					'.property',
					{
						nodeName: undefined,
						objectName: undefined,
						objectIndex: undefined,
						propertyName: 'property',
						propertyIndex: undefined
					}
				],

				[
					'nodeName.property',
					{
						nodeName: 'nodeName',
						objectName: undefined,
						objectIndex: undefined,
						propertyName: 'property',
						propertyIndex: undefined
					}
				],

				[
					'a.property',
					{
						nodeName: 'a',
						objectName: undefined,
						objectIndex: undefined,
						propertyName: 'property',
						propertyIndex: undefined
					}
				],

				[
					'no.de.Name.property',
					{
						nodeName: 'no.de.Name',
						objectName: undefined,
						objectIndex: undefined,
						propertyName: 'property',
						propertyIndex: undefined
					}
				],

				[
					'no.d-e.Name.property',
					{
						nodeName: 'no.d-e.Name',
						objectName: undefined,
						objectIndex: undefined,
						propertyName: 'property',
						propertyIndex: undefined
					}
				],

				[
					'nodeName.property[accessor]',
					{
						nodeName: 'nodeName',
						objectName: undefined,
						objectIndex: undefined,
						propertyName: 'property',
						propertyIndex: 'accessor'
					}
				],

				[
					'nodeName.material.property[accessor]',
					{
						nodeName: 'nodeName',
						objectName: 'material',
						objectIndex: undefined,
						propertyName: 'property',
						propertyIndex: 'accessor'
					}
				],

				[
					'no.de.Name.material.property',
					{
						nodeName: 'no.de.Name',
						objectName: 'material',
						objectIndex: undefined,
						propertyName: 'property',
						propertyIndex: undefined
					}
				],

				[
					'no.de.Name.material[materialIndex].property',
					{
						nodeName: 'no.de.Name',
						objectName: 'material',
						objectIndex: 'materialIndex',
						propertyName: 'property',
						propertyIndex: undefined
					}
				],

				[
					'uuid.property[accessor]',
					{
						nodeName: 'uuid',
						objectName: undefined,
						objectIndex: undefined,
						propertyName: 'property',
						propertyIndex: 'accessor'
					}
				],

				[
					'uuid.objectName[objectIndex].propertyName[propertyIndex]',
					{
						nodeName: 'uuid',
						objectName: 'objectName',
						objectIndex: 'objectIndex',
						propertyName: 'propertyName',
						propertyIndex: 'propertyIndex'
					}
				],

				[
					'parentName/nodeName.property',
					{
						// directoryName is currently unused.
						nodeName: 'nodeName',
						objectName: undefined,
						objectIndex: undefined,
						propertyName: 'property',
						propertyIndex: undefined
					}
				],

				[
					'parentName/no.de.Name.property',
					{
						// directoryName is currently unused.
						nodeName: 'no.de.Name',
						objectName: undefined,
						objectIndex: undefined,
						propertyName: 'property',
						propertyIndex: undefined
					}
				],

				[
					'parentName/parentName/nodeName.property[index]',
					{
						// directoryName is currently unused.
						nodeName: 'nodeName',
						objectName: undefined,
						objectIndex: undefined,
						propertyName: 'property',
						propertyIndex: 'index'
					}
				],

				[
					'.bone[Armature.DEF_cog].position',
					{
						nodeName: undefined,
						objectName: 'bone',
						objectIndex: 'Armature.DEF_cog',
						propertyName: 'position',
						propertyIndex: undefined
					}
				],

				[
					'scene:helium_balloon_model:helium_balloon_model.position',
					{
						nodeName: 'helium_balloon_model',
						objectName: undefined,
						objectIndex: undefined,
						propertyName: 'position',
						propertyIndex: undefined
					}
				]
			];

			paths.forEach( function ( path ) {

				assert.smartEqual(
					PropertyBinding.parseTrackName( path[ 0 ] ),
					path[ 1 ],
					'Parses track name: ' + path[ 0 ]
				);

			} );

		} );

		QUnit.test( "findNode", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		// PUBLIC STUFF
		QUnit.test( "BindingType", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		QUnit.test( "Versioning", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		QUnit.test( "GetterByBindingType", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		QUnit.test( "SetterByBindingTypeAndVersioning", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		QUnit.test( "getValue", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		QUnit.test( 'setValue', ( assert ) => {

			var paths = [
				'.material.opacity',
				'.material[opacity]'
			];

			paths.forEach( function ( path ) {

				var originalValue = 0;
				var expectedValue = 1;

				var geometry = new BoxGeometry();
				var material = new MeshBasicMaterial();
				material.opacity = originalValue;
				var mesh = new Mesh( geometry, material );

				var binding = new PropertyBinding( mesh, path, null );
				binding.bind();

				assert.equal(
					material.opacity,
					originalValue,
					'Sets property of material with "' + path + '" (pre-setValue)'
				);

				binding.setValue( [ expectedValue ], 0 );
				assert.equal(
					material.opacity,
					expectedValue,
					'Sets property of material with "' + path + '" (post-setValue)'
				);

			} );

		} );

		QUnit.test( "bind", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		QUnit.test( "unbind", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		// OTHERS
		QUnit.test( "_getValue_unavailable", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		QUnit.test( "_setValue_unavailable", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

	} );

} );
