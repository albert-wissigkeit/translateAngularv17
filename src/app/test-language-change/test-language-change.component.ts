import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-test-language-change',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './test-language-change.component.html',
  styleUrl: './test-language-change.component.scss'
})
export class TestLanguageChangeComponent {

}
