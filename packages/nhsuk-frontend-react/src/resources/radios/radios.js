/**
 *
 * The contents of this file was automatically generated from the NHS.UK Frontend.
 *
 * Do not make changes to this file directly.
 *
*/
import { toggleConditionalInput } from '@/resources/common';

/**
 * Conditionally show content when a radio button is checked
 * Test at http://localhost:3000/nhsuk-frontend/components/radios/conditional.html
 */

/* *
 *
 * @param {{ scope?: HTMLElement | Document | null }} params
 * @returns {void}
 *
*/
export default ({ scope = document } = {}) => {
  // Radio input HTMLElements inside a conditional form group
  const radioInputs = scope.querySelectorAll(
    '.nhsuk-radios--conditional .nhsuk-radios__input'
  )

  /**
   * Update all conditional reveals to match checked state
   */
  const syncAllConditionalReveals = () => {
    radioInputs.forEach((input) =>
      toggleConditionalInput(input, 'nhsuk-radios__conditional--hidden')
    )
  }

  // When the page is restored after navigating 'back' in some browsers the
  // state of form controls is not restored until *after* the DOMContentLoaded
  // event is fired, so we need to sync after the pageshow event in browsers
  // that support it.
  if ('onpageshow' in window) {
    window.addEventListener('pageshow', syncAllConditionalReveals)
  } else {
    window.addEventListener('DOMContentLoaded', syncAllConditionalReveals)
  }

  // Although we've set up handlers to sync state on the pageshow or
  // DOMContentLoaded event, init could be called after those events have fired,
  // for example if they are added to the page dynamically, so sync now too.
  syncAllConditionalReveals()

  // Attach event handler to radioInputs
  radioInputs.forEach((radioButton) => {
    radioButton.addEventListener('change', syncAllConditionalReveals)
  })
};