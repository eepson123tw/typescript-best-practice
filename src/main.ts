import '@unocss/reset/normalize.css'
import './style.css'
import 'virtual:uno.css'
import { mount, getInputFocus } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="text-center b-1 b-white b-solid p-3 w-[400px] md:w-[600px] lg:w-[800px] ">
    <h1>Google Calculator</h1> 
    <!-- Input Area ---!>   
    <div>
      ${mount('inputArea')}
    </div>
    <div class="mx-[5px]">
      <div class='grid grid-cols-7 grid-rows-4 mt-2 text-[13px] gap-3'> 
        <!-- TOP ---!>
        <div class="col-span-2 flex input-btn">
          <div role="button" tabindex="0" aria-label="切換弧度和角度" class='flex-1'>Rad</div>|
          <div role="button" tabindex="0" aria-label="切換弧度和角度" class='flex-1'>Deg</div>
        </div>
        <div class="input-btn" role="button" tabindex="0" aria-label="階乘">x!</div>
        <div class="input-btn" role="button" tabindex="0" aria-label="左括號">(</div>
        <div class="input-btn" role="button" tabindex="0" aria-label="右括號">(</div>
        <div class="input-btn" role="button" tabindex="0" aria-label="百分比">%</div>
        <div class="input-btn" role="button" tabindex="0" aria-label="清除項目">CE</div>
        <!-- MIDDLE 1 ---!>
        <div class="input-btn" role="button" tabindex="0" aria-label="倒數">Inv</div>
        <div class="input-btn">
          <div role="button" tabindex="0" aria-label="正弦" >sin</div>
          <div style="display:none" role="button" tabindex="0" aria-label="反正弦" > sin<sup>−1</sup></div>
        </div>
        <div class="input-btn">
          <div role="button" tabindex="0" aria-label="自然對數" > ln </div>
          <div style="display:none"  role="button" tabindex="0" aria-label="E 的 X 次方" > e<sup>x</sup></div>
        </div>
        <div class="input-btn input-btn--light" role="button" tabindex="0">7</div>
        <div class="input-btn input-btn--light" role="button" tabindex="0">8</div>
        <div class="input-btn input-btn--light" role="button" tabindex="0">9</div>
        <div class="input-btn font-size-[18px]" role="button" tabindex="0">÷</div>
        <!-- MIDDLE 2 ---!>
        <div class="input-btn" role="button" tabindex="0" aria-label="圓周率">π</div>
        <div class="input-btn">
          <div role="button" tabindex="0" aria-label="餘弦" >cos</div>
          <div style="display:none"  role="button" tabindex="0" aria-label="反餘弦"> cos<sup>−1</sup></div>
        </div>
        <div class="input-btn">
          <div  role="button" tabindex="0" aria-label="對數" >log</div>
          <div style="display:none"  role="button" tabindex="0" aria-label="十的 X 次方" > 10<sup>x</sup></div>
        </div>
        <div class="input-btn input-btn--light" role="button" tabindex="0">4</div>
        <div class="input-btn input-btn--light" role="button" tabindex="0">5</div>
        <div class="input-btn input-btn--light" role="button" tabindex="0">6</div>
        <div class="input-btn font-size-[18px]" role="button" tabindex="0">x</div>
        <!-- MIDDLE 3 ---!>
        <div class="input-btn">
          <div role="button" tabindex="0" aria-label="自然對數" > ln </div>
          <div style="display:none"  role="button" tabindex="0" aria-label="E 的 X 次方" > e<sup>x</sup></div>
        </div>
        <div class="input-btn">
          <div role="button" tabindex="0" aria-label="正切" >tan</div>
          <div style="display:none"  role="button" tabindex="0" aria-label="反正切" > tan<sup>−1</sup></div>
        </div>
        <div class="input-btn">
          <div role="button" tabindex="0" aria-label="平方根" >√ </div>
          <div style="display:none"  role="button" tabindex="0" aria-label="平方" > x<sup>2</sup></div>
        </div>
        <div class="input-btn input-btn--light" role="button" tabindex="0">1</div>
        <div class="input-btn input-btn--light" role="button" tabindex="0">2</div>
        <div class="input-btn input-btn--light" role="button" tabindex="0">3</div>
        <div class="input-btn font-size-[18px]" role="button" tabindex="0">-</div>
        <!-- FOOTER ---!>
        <div class="input-btn">
          <div  role="button" tabindex="0" aria-label="答案" >Ans</div>
          <div  style="display:none"  role="button" tabindex="0" aria-label="隨機">Rnd</div>
        </div>
        <div class="input-btn" role="button" tabindex="0" aria-label="指數">EXP</div>
        <div class="input-btn line-height-[26px]">
          <div  role="button" tabindex="0" aria-label="X 的 Y 次方" >x<sup>y</sup></div>
          <div style="display:none"  role="button" tabindex="0" aria-label="X 的 Y 次方根" > <sup>y</sup>√x</div>
        </div>
        <div class="input-btn input-btn--light" role="button" tabindex="0">0</div>
        <div class="input-btn input-btn--light" role="button" tabindex="0">.</div>
        <div class="input-btn input-btn--blue font-size-[18px]" role="button" tabindex="0">=</div>
        <div class="input-btn font-size-[18px]" role="button" tabindex="0">+</div>
      </div>
    </div> 
  </div>
`

getInputFocus(
  document.querySelector<HTMLDivElement>('.jx-input')!,
  document.querySelector<HTMLDivElement>('.jx-input')!
)

/* 先留者看 methods
 <table class="HOoTuc">
      <tbody>
        <tr>
          <td class="" colspan="2">
            <div class="">
              <div role="button" tabindex="0" aria-label="切換弧度和角度" >
                <div class="Tqvz7b">Rad</div>
                <div class="Lm2Tt"></div>
                <div class="SwDSDf">Deg</div>
              </div>
            </div>
          </td>
          <td>
            <div class="">
              <div role="button" tabindex="0" aria-label="階乘" >x!</div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="">
              <div  role="button" tabindex="0" aria-label="倒數" >Inv</div>
            </div>
          </td>
          <td>
            <div class="">
              <div  role="button" tabindex="0" aria-label="正弦" >sin</div>
              <div style="display:none"  role="button" tabindex="0" aria-label="反正弦" > sin<sup>−1</sup></div>
            </div>
          </td>
          <td>
            <div class="">
              <div role="button" tabindex="0" aria-label="自然對數" > ln </div>
              <div style="display:none"  role="button" tabindex="0" aria-label="E 的 X 次方" > e<sup>x</sup></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="">
              <div role="button" tabindex="0" aria-label="圓周率" >π</div>
            </div>
          </td>
          <td>
            <div class="">
              <div  role="button" tabindex="0" aria-label="餘弦" >cos</div>
              <div style="display:none"  role="button" tabindex="0" aria-label="反餘弦" > cos<sup>−1</sup></div>
            </div>
          </td>
          <td>
            <div class="">
              <div  role="button" tabindex="0" aria-label="對數" >log</div>
              <div style="display:none"  role="button" tabindex="0" aria-label="十的 X 次方" > 10<sup>x</sup></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="">
              <div role="button" tabindex="0" aria-label="尤拉數" >e</div>
            </div>
          </td>
          <td>
            <div class="">
              <div  role="button" tabindex="0" aria-label="正切" >tan</div>
              <div tyle="display:none"  role="button" tabindex="0" aria-label="反正切" > tan<sup>−1</sup></div>
            </div>
          </td>
          <td>
            <div class="">
              <div role="button" tabindex="0" aria-label="平方根" >√ </div>
              <div style="display:none"  role="button" tabindex="0" aria-label="平方" > x<sup>2</sup></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="">
              <div  role="button" tabindex="0" aria-label="答案" >Ans</div>
              <div tyle="display:none"  role="button" tabindex="0" aria-label="隨機" > Rnd</div>
            </div>
          </td>
          <td>
            <div class="">
              <div role="button" tabindex="0" aria-label="指數" >EXP</div>
            </div>
          </td>
          <td>
            <div class="">
              <div  role="button" tabindex="0" aria-label="X 的 Y 次方" >x<sup>y</sup></div>
              <div style="display:none"  role="button" tabindex="0" aria-label="X 的 Y 次方根" > <sup>y</sup>√x</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="ElumCf">
      <tbody>
        <tr>
          <td>
            <div class="">
              <div role="button" tabindex="0" aria-label="左括號" >(</div>
            </div>
          </td>
          <td>
            <div class="">
              <div ole="button" tabindex="0" aria-label="右括號" >)</div>
            </div>
          </td>
          <td>
            <div class="">
              <div ole="button" tabindex="0" aria-label="百分比" >%</div>
            </div>
          </td>
          <td>
            <div class="">
              <div ousedown:JHz26d" role="button" tabindex="0" aria-label="全部清除"  style="display: none;">AC</div>
              <div tyle="" mousedown:JHz26d" role="button" tabindex="0" aria-label="清除項目" >CE</div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="">
              <div role="button" tabindex="0" >7</div>
            </div>
          </td>
          <td>
            <div class="">
              <div role="button" tabindex="0" >8</div>
            </div>
          </td>
          <td>
            <div class="">
              <div ole="button" tabindex="0" >9</div>
            </div>
          </td>
          <td>
            <div class="PaQdxb mF5fo">
              <div role="button" tabindex="0" aria-label="除" >÷</div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="">
              <div ole="button" tabindex="0" >4</div>
            </div>
          </td>
          <td>
            <div class="">
              <div ole="button" tabindex="0" >5</div>
            </div>
          </td>
          <td>
            <div class="">
              <div role="button" tabindex="0" >6</div>
            </div>
          </td>
          <td>
            <div class="PaQdxb mF5fo">
              <div role="button" tabindex="0" aria-label="乘" >×</div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="">
              <div ole="button" tabindex="0" >1</div>
            </div>
          </td>
          <td>
            <div class="">
              <div role="button" tabindex="0" >2</div>
            </div>
          </td>
          <td>
            <div class="">
              <div ole="button" tabindex="0" >3</div>
            </div>
          </td>
          <td>
            <div class="PaQdxb mF5fo">
              <div role="button" tabindex="0" aria-label="減" >−</div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="">
              <div role="button" tabindex="0" >0</div>
            </div>
          </td>
          <td>
            <div class="PaQdxb mF5fo G7BHUb">
              <div role="button" tabindex="0" aria-label="點" >.</div>
            </div>
          </td>
          <td>
            <div class="PaQdxb mF5fo G7BHUb">
              <div role="button" tabindex="0" aria-label="等於" >=</div>
            </div>
          </td>
          <td>
            <div class="PaQdxb mF5fo">
              <div role="button" tabindex="0" aria-label="加" >+</div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
*/
