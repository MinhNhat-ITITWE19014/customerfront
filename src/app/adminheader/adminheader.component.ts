import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faClipboard} from '@fortawesome/free-solid-svg-icons';
import { faClipboardList} from '@fortawesome/free-solid-svg-icons';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.scss']
})
export class AdminheaderComponent {
  faUser = faUser;
  faClipboard = faClipboard;
  faPlus = faPlus;
  faClipboardList = faClipboardList;
  faAngleDown = faAngleDown;
  faArrowRightFromBracket = faArrowRightFromBracket;
}
