export function mount(text: string) {
  const inputArea = ` <div tabindex="0" class="flex bg-white b-2 b-solid b-rounded b-[#dadce0] text-black mx-[5px] pr-[14px] pl-[10px] pt-[10px] flex-wrap hover:drop-shadow hover:shadow-inset jx-input">
<div class="j-history w-[22px] h-[22px] text-gray">
  <svg  fill="rgb(112, 117, 122)" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></svg>
</div>
<div class="jx-pre-movement flex-1 text-right text-[#70757A]">8+8=</div>   
<div class="text-[30px] text-truncate w-full text-right">16</div> 
</div>`

  if (text === 'inputArea') {
    return inputArea
  }

  return ''
}

export function getInputFocus(
  element: HTMLDivElement,
  focusElement: HTMLDivElement
) {
  element.addEventListener('click', () => {
    const currentClassList = focusElement.classList
    currentClassList.toggle('b-[#dadce0]')
    currentClassList.toggle('b-[#4285f4]')
  })
}
