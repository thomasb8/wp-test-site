/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

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
	const { imageSrc, headlineText, ctaLink, ctaText } = attributes
	const blockProps = useBlockProps.save({ className: 'w-full h-screen' })
	return (
		<div {...blockProps}>
			<img src={imageSrc} className='absolute w-full h-full object-cover -z-[1]' alt="asd"></img>
			<div className='overlay'></div>
			<div className='banner-content'>
				<h1 className="headline">{headlineText}</h1>
				<a href={ctaLink} className="cta-button">{ctaText}</a>
			</div>
		</div>
	);
}
