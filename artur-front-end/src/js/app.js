/*
(i) Код попадает в итоговый файл,
только когда вызвана функция,
например flsFunctions.spollers();
Или когда импортирован весь файл,
например import "files/script.js";
Неиспользуемый (не вызванный)
код в итоговый файл не попадает.

Если мы хотим добавить модуль
следует его расскоментировать
*/

// Включить/выключить ART (Full Logging System) (в работе)
window['ART'] = false;

// Подключение основного файла стилей
import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Функціонал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp с css */
flsFunctions.isWebp();
/* Додавання класу touch для HTML якщо браузер мобільний */
flsFunctions.addTouchClass();
/* Додавання loaded для HTML після повного завантаження сторінки */
//flsFunctions.addLoadedClass();

/* Модуль для роботи з меню (Бургер) */
flsFunctions.menuInit();
/* Враховування плаваючої панелі на мобільних пристроях при 100vh */
flsFunctions.fullVHfix();


// ========================================================================================================================================================================================================================================================
// Робота з формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js";

/* Динамічний адаптив */
// Документація: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
//import "./libs/dynamic_adapt.js";

// Ліниве (відкладене) завантаження картинок
// Документація плагіна: https://github.com/verlok/vanilla-lazyload
// Сніппет(HTML): imgl
import './files/scroll/lazyload.js';


// Спостерігач за об'єктами з атрибутом data-watch
// Документація: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Сніппет(HTML):
import './libs/watcher.js'

// Функції роботи скролом
import * as flsScroll from "./files/scroll/scroll.js";

// Плавна навігація по сторінці
// Документація: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
flsScroll.pageNavigation();

// Функціонал додавання класів до хедеру під час прокручування
// Документація: 
flsScroll.headerScroll();

// ========================================================================================================================================================================================================================================================
// Прочее ========================================================================================================================================================================================================================================================
/*
Модуль "Filter Gallery"
Документація:
Сніппет (HTML): filter
	<ul class="filter">
		<li class="filter__list">
			<button class="filter__button active" data-filter="all" type="button">All</button>
		</li>
	</ul>
	<div class="product">
		<div class="product__box" data-item="all"></div>
	</div>
*/
flsFunctions.filterGallery();
// ========================================================================================================================================================================================================================================================

/* Подключаем файлы со своим кодом */
import "./files/script.js";
//============================================================================================================================================================================================================================================