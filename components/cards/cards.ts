import { link } from "fs";


const charTemplate = `

			<li class="character col">
				<div class="card character__card">
					<img src="img/no-one.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
					<div class="card-body">
						<h2 class="character__name card-title h4">${this.name} ${this.family}</h2>
						<div class="character__info">
							<ul class="list-unstyled">
								<li>Edad: ${this.age}/li>
								<li>
									Estado:
									<i class="fas fa-thumbs-down"></i>
									<i class="fas fa-thumbs-up"></i>
								</li>
							</ul>
						</div>
						<div class="character__overlay">
							<ul class="list-unstyled">
								<li>Años de reinado: X</li>
								<li>Arma: XXX</li>
								<li>Destreza: X</li>
								<li>Peloteo: X</li>
								<li>Asesora a: X</li>
								<li>Sirve a: X</li>
							</ul>
							<div class="character__actions">
								<button class="character__action btn">habla</button>
								<button class="character__action btn">muere</button>
							</div>
						</div>
					</div>
					<i class="emoji"></i>
				</div>
			</li>
`;

const charList = document.querySelector('ul') as HTMLElement;
charList.insertAdjacentHTML('afterbegin', charTemplate);


const renderList = (data: Tasks) => {
	let tasksTemplate = '<div class="lista">';
	mockTitle.forEach((item) => {
		tasksTemplate += ` <p>
	id: ${item.id},
	title: ${item.id},
	responsible: ${item.responsible},
	isCompleted: ${item.isCompleted}
	<button data-id="${item.id}" >🔥 ${item.id}</button>
<p> `;
	});
	tasksTemplate += '</div>';
	root.insertAdjacentHTML('beforeend', tasksTemplate);
};





const info: Array = Array.from(document.querySelectorAll('.list-unstyled>li'));
info.forEach(elem => {
	if(info.innerHTML)
})

