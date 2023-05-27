import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faUser = faUser;
  faCartShopping= faCartShopping;
  faAngleDown = faAngleDown;
  faArrowRightFromBracket = faArrowRightFromBracket;
}
