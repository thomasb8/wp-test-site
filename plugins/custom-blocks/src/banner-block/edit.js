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
import { useBlockProps, MediaUpload, InspectorControls, RichText, URLInput, PlainText } from '@wordpress/block-editor';

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

import { Button, PanelBody, TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { imageSrc, imageAlt, headlineText, ctaLink, ctaText } = attributes;
	const blockProps = useBlockProps({
		className: 'w-full h-screen'
	})
	return (
		<div {...blockProps}>
			<img src={imageSrc} className='absolute w-full h-full object-cover -z-[1]' alt={imageAlt}></img>
			<div className='overlay'></div>
			<div className='banner-content'>
				<InspectorControls>
					<PanelBody title={__('Image Settings', 'banner-block')}>
						<MediaUpload
							onSelect={(media) => setAttributes({ imageSrc: media.url, imageAlt: media.alt })}
							type="image"
							render={({ open }) => (
								<Button onClick={open} variant='secondary' isLarge>
									{__('Select Image', 'banner-block')}
								</Button>
							)}
						/>
					</PanelBody>
					<PanelBody title={__('Text Settings', 'banner-block')}>
						<TextControl
							label={__('Headline Text', 'banner-block')}
							value={headlineText}
							onChange={(value) => setAttributes({ headlineText: value })}
						/>
						<URLInput
							__nextHasNoMarginBottom
							label={__('Button URL', 'banner-block')}
							value={ctaLink}
							onChange={(value) => setAttributes({ ctaLink: value })}
						/>
						<TextControl
							label={__('Button Text', 'banner-block')}
							value={ctaText}
							onChange={(value) => setAttributes({ ctaText: value })}
						/>
					</PanelBody>
				</InspectorControls>
				<RichText className="headline"
					tagName="h1"
					value={headlineText}
					onChange={(val) => setAttributes({ headlineText: val })}
					allowedFormats={[]}
					placeholder={__('Enter heading...', 'sage')}></RichText>
					<input className="cta-button"
					tagName="a"
					style={{ background: 'transparent' }}
					value={ctaText}
					onChange={(e) => setAttributes({ ctaText: e.target.value })}
					placeholder={__('Enter CTA text...', 'sage')}></input>
			</div>
		</div>
	);
}
