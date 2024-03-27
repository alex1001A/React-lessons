import Inst from '../../img/instagram.png'
import Face from '../../img/facebook.png'
import Git from '../../img/github.png'
import Dribbble from '../../img/dribbble.png'
import Twitter from '../../img/twitter.png'

export default function Social() {
    return (
        <div class="footer__social-block">
            <img className='footer__social-block_icon' src={Inst} alt="" />
            <img className='footer__social-block_icon' src={Face} alt="" />
            <img className='footer__social-block_icon' src={Git} alt="" />
            <img className='footer__social-block_icon' src={Dribbble} alt="" />
            <img className='footer__social-block_icon' src={Twitter} alt="" />
        </div>
    )
}