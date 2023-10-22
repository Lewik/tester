const tooSlowMessages = [
    "Математика - это не расследование убийств!",
    "Даже Эйнштейн бы уже ответил!",
    "Ты что, собираешься стать математиком?",
    "Пока ты думаешь, я выучу всю таблицу умножения!",
    "Мир уже сделал два круга вокруг Солнца!",
    "Ученые расширили Вселенную, а ты всё думаешь...",
    "Будешь думать так долго, что вырастешь из школы!",
    "Антивирус уже успел обновиться за это время!",
    "Будущее ждет, а ты всё думаешь о прошлом!",
    "Математика - это же не космические вычисления!",
    "Ты уверен, что у тебя нет тайного желания стать математиком?",
    "Время идет, а ты стоишь на месте!",
    "Мы ждем ответ, а он все не приходит...",
    "Лето прошло, а ты всё думал над этим заданием!",
    "У тебя такой мозг, будто он делает вычисления на абакусе!",
    "Уважение к математике - это хорошо, но не так долго!",
    "Я родился и вырос, а ты еще думаешь!",
    "Математика - это не загадка Сфинкса!",
    "Возможно, Греция бы уже изобрела новую математику!",
    "Мы бы уже построили пирамиды, если бы ты не задумывался!",
    "Твоя калькуляторная батарейка уже села от ожидания!",
    "Над этим заданием можно философствовать, но не так долго!",
    "Если бы думал так же над транспортом, мы бы ездили на каретах!",
    "Пусть даже Земля тебе подсказывает ответ, но быстрее!",
    "Долго думать - это хорошо, но не над математикой!",
    "Ты думаешь так долго, что волосы начинают выпадать!",
    "Эйнштейн где-то печется от нетерпения в аду!",
    "Слон мог бы дать ответ быстрее!",
    "Мы смотрели бы на старость, а ты все думал бы!",
    "Время летит быстрее, чем твоя мысль!",
    "Даже Черепашка Тортила бы удивилась твоей медлительности!",
    "Мир меняется, а ты так и думаешь...",
    "Ты, наверное, в другой Вселенной считаешь?",
    "Задача прошла в арену и ушла, а ты так и думаешь...",
    "Даже соседняя галактика ждет ответа!",
    "Ты собираешься думать до конца Вселенной?",
    "Уже можно было бы создать клона, который ответит быстрее!",
    "Ты уверен, что считаешь, а не замешиваешь кекс?",
    "Ты серьезно? Долго думать над такой задачей?",
    "Ты хоть читал задание, или просто медитируешь?",
    "Время не ждет твоих математических размышлений!",
    "Ты точно не хочешь стать философом?",
    "Слон считает быстрее, чем ты!",
    "Будешь думать так долго, что даже Дракула дождется!",
    "Сколько математиков нужно, чтобы ответить на это задание?",
    "Ты думаешь, как Дед Мороз перед Новым Годом!",
    "Если бы математика была спортом, ты бы был чемпионом!",
    "Время - это деньги, а ты тратишь его на думание!",
    "Мы скучаем по твоему ответу, как котенок по молоку!",
    "Все ждут твоего ответа, а ты делаешь паузу...",
    "Ученые давно бы догадались, а ты все думаешь!",
    "Ты считаешь, или это встреча двух чужих цивилизаций?",
    "Ты хоть на часы посмотри, время течет!",
    "Задача никогда не сдастся, а ты думай...",
    "Ты в другом измерении, или почему так долго?",
    "Новые континенты образовались, а ты еще думаешь!",
    "Твоя книга жизни стала бы толще, если бы не эта задача!",
    "Ты думаешь как динозавр, но это не делает тебя старше!",
    "Ты считаешь, или просто пытаешься пройти время?",
    "Задача не стоит стольких размышлений!",
    "Ты думаешь так долго, что даже пираты бы отплыли!",
    "Думаешь так долго, что скоро станешь бессмертным!",
    "Математика ждет, а ты все думаешь...",
    "У меня уже седые волосы от ожидания!",
    "Ты уверен, что ты не ученый в параллельной вселенной?",
    "Думать долго - это твой хобби?",
    "Мы исследовали бы Марс, если бы не твое размышление!",
    "Ты думаешь так долго, что сгусток времени стоит рядом!",
    "Мы уже в следующем тысячелетии, а ты еще думаешь...",
    "Мы могли бы построить ракету на Марс, но...",
    "Ты серьезно? Долго думать над таким простым заданием?",
    "Мы в 3023 году, а ты все думаешь над 2 + 2...",
    "Задача не стоит твоего времени, но ты все равно думаешь...",
    "Ты точно не считаешь свои волосы в это время?",
    "Ты считаешь, или пересчитываешь овец?",
    "Ты хоть часы смотришь? Время уходит!",
    "Ты думаешь так долго, что космический корабль уже давно вылетел!",
    "Мы были бы на Марсе, если бы не твое думание...",
    "Сколько мирозданий ты успел придумать за это время?",
    "Ты уверен, что ты не гений в параллельной реальности?",
    "Ты серьезно? Над простой задачей так долго думаешь?",
    "Ты точно не считаешь временные петли?",
    "Задача так долго ждет твоего ответа, что уже поседела!",
    "Ученые обнаружили еще одну вселенную, а ты все думаешь...",
    "Ты находишь формулу вечной молодости, или что?",
    "Ты думаешь так долго, что Вселенная начинает сжиматься!",
    "Мы бы уже сделали контакт с пришельцами, если бы не ты!",
    "Ты считаешь, или проводишь эксперимент по медленности мысли?",
    "Ты точно не принимаешь участие в гонке лени?",
    "Задача стала бы частью истории, если бы не ты!",
    "Ты думаешь так долго, что даже звезды умирают и рождаются!",
    "Мы бы уже нашли фонтан вечной молодости, если бы не ты!",
    "Ты хоть часы смотришь? Время уходит, а ты думаешь...",
    "Мы бы уже нашли ключи к вечной жизни, если бы не ты!",
    "Ты точно не исследуешь черные дыры в своей голове?",
    "Ты думаешь так долго, что планеты обогнали тебя вокруг Солнца!",
    "Мы бы уже нашли ответ на Великую Тайну, если бы не ты!",
    "Ты считаешь, или замедляешь процесс расширения Вселенной?",
    "Ты точно не занимаешься долгим созерцанием пустоты?",
    "Задача так долго ждет твоего ответа, что уже разлетелась на атомы!",
    "Ученые разгадали бы тайну черных дыр, если бы не ты!",
    "Ты уверен, что ты не борец за медлительность?",
    "Ты точно не участвуешь в соревнованиях по забыванию?",
];

