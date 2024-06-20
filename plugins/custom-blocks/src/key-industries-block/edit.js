/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps, BlockIcon, MediaUpload, PlainText, InspectorControls } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

import { Button, Placeholder, PanelBody, TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { imageSrc, imageAlt, industryHeadline, industryDescription } = attributes
	return (
		<div {...useBlockProps({ className: 'industry-block' })}>
			{!imageSrc ? <Placeholder
				icon={<BlockIcon icon="format-image" />}
				label={__('Image block', 'key-industries-block')}>
				<MediaUpload
					onSelect={(media) => setAttributes({ imageSrc: media.url, imageAlt: media.alt })}
					type="image"
					render={({ open }) => (
						<Button onClick={open} variant='secondary' isLarge>
							{__('Select Image', 'banner-block')}
						</Button>
					)}
				/>
			</Placeholder> :
				<img src={imageSrc} alt={imageAlt} />}
			<PlainText placeholder={__('Enter headline...', 'key-industries-block')}
				value={industryHeadline}
				className='industry-headline'
				onChange={(val) => setAttributes({ industryHeadline: val })}></PlainText>
			<PlainText
				placeholder={__('Enter description...', 'key-industries-block')}
				value={industryDescription}
				className='industry-description'
				onChange={(val) => setAttributes({ industryDescription: val })}></PlainText>
			<InspectorControls>
				<PanelBody title={__('Image Settings', 'key-industries-block')}>
					<MediaUpload
						onSelect={(media) => setAttributes({ imageSrc: media.url })}
						type="image"
						render={({ open }) => (
							<Button onClick={open} variant='secondary' isLarge>
								{__('Select Image', 'key-industries-block')}
							</Button>
						)}
					/>
				</PanelBody>
				<PanelBody title={__('Text Settings', 'key-industries-block')}>
					<TextControl
						label={__('Industry headline text', 'key-industries-block')}
						value={industryHeadline}
						onChange={(value) => setAttributes({ industryHeadline: value })}
					/>
					<TextControl
						label={__('Industry description text', 'key-industries-block')}
						value={industryDescription}
						onChange={(value) => setAttributes({ industryDescription: value })}
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
