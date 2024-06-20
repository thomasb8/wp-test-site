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
import { InnerBlocks, useBlockProps, PlainText, RichText, useInnerBlocksProps } from '@wordpress/block-editor';

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

export default function Edit({ attributes, setAttributes }) {
	const { headline } = attributes
	const innerBlocksProps = useInnerBlocksProps({
		className: 'grid md:grid-cols-3 gap-y-[3.75rem] md:gap-y-[10rem] auto-rows-max'
	}, {
		allowedBlocks: ['key-industries-block/key-industries-block'],
		defaultBlock: { name: 'key-industries-block/key-industries-block' },
		directInsert: true
	})
	return (
		<div {...useBlockProps({ className: 'key-industries-section-container' })}>
			<RichText
				placeholder={__('Enter headline...', 'key-industries-section')}
				tagName='h2'
				allowedFormats={[]}
				value={headline}
				className="key-industries-headline"
				onChange={(val) => setAttributes({ headline: val })}></RichText>
			<div {...innerBlocksProps}></div>
		</div>
	);
}
