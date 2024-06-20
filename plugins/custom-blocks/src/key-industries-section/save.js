/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { headline } = attributes
	return (
		<div { ...useBlockProps.save({ className: 'key-industries-section-container' }) }>
			<h2 className="key-industries-headline">{ headline }</h2>
			<div className='grid md:grid-cols-3 gap-y-[3.75rem] md:gap-y-[10rem] auto-rows-max'>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
