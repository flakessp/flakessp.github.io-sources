<template>
  <div class="container">
    <link href="https://fonts.googleapis.com/css?family=PT+Mono&amp;subset=cyrillic" rel="stylesheet">
    <div>
      <h2 class="box title--week">🌍 неделя #3</h2>
    </div>
    <div class="homework">
      <h1 class="box blended">Домашнее задание</h1>
      <div>
        <ul class="box list">
          <li>Буква</li>
          <li>Слово</li>
          <li>Предложение</li>
          <li>Абзац</li>
          <li>Текст (2+ абзаца)</li>
          <li>Список всех предыдущих </li>
        </ul>
      </div>
    </div>

    <div>
      <h2 class="box blended">Полезные ссылки</h2>
      <div>
        <ul class="box list">
          <li><a target="_blank" href="https://webref.ru/css">справочник CSS</a></li>
          <li><a target="_blank" href="https://webref.ru/html">справочник HTML</a></li>
          <li><a target="_blank" href="https://fonts.google.com">Google Fonts</a></li>
          <li><a target="_blank" href="https://htmlacademy.ru/courses/4/run/1">Я ничего не понимаю!</a></li>
        </ul>
      </div>
    </div>

    <div>
      <h2 class="box blended">Необходимые программы</h2>
      <div>
        <ul class="box list">
          <li><a target="_blank" href="https://code.visualstudio.com/">Visual Studio Code</a></li>
          <li><a target="_blank" href="https://desktop.github.com/">Github Desktop</a></li>
          <li><a target="_blank" href="https://www.google.com/chrome/canary/">Google Chrome</a></li>
        </ul>
      </div>
    </div>
    <div>
      <h2 class="box blended">Материал недели</h2>
      <div>
        <ul class="box list">
          <li>Интерфейс Visual Studio Code. Сниппеты и расширения</li>
          <li>Основа веб страницы</li>
          <li>Основные html теги. Линейные. Блочные</li>
          <li>Основа CSS. Внутренние и внешние отступы. Форматирование текста</li>
          <li>Селекторы. По тегу. По классу</li>
        </ul>
      </div>
    </div>
    <div>
      <h2 class="box blended">Вдохновение</h2>
      <div>
        <div class="box">
          ❝◐◑❞
          <ul class="list">
            <li><a target="_blank" href="https://www.typewolf.com/site-of-the-day">Typewolf</a></li>
            <li><a target="_blank" href="https://hoverstat.es/">Hover States</a></li>
            <li><a target="_blank" href="http://www.ecogex.com/delectable/">Delectable</a></li>
          </ul>
          ❝◐◑❞
          <ul class="list">
            <li><a target="_blank" href="https://butdoesitfloat.com/Index">But Does It Float</a></li>
            <li><a target="_blank" href="https://www.itsnicethat.com/">It's Nice That</a></li>
            <li><a target="_blank" href="https://eyeondesign.aiga.org/">AIGA Eye on Design</a></li>
            <li><a target="_blank" href="http://www.manystuff.org/">Manystuff</a></li>
            <li><a target="_blank" href="http://www.rawcolor.nl/welcome/">Raw Color</a></li>
          </ul>

        </div>
        
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  }, mounted() {
  }, components: {
  }
}
  
</script>

<style scoped>

  .title--week {
    transform: rotate(-31deg);
  }

  .blended {
    /* mix-blend-mode: color-burn; */
  }
  .container {
    font-family: 'PT Mono', monospace;
    display: flex;
    flex-wrap: wrap;
    padding: 50px;
    justify-content: space-between;
    background: #fffddf;
    color: black;
    min-height: 100vh;
    font-size: 20px;
  }
  ul {
    text-align: left;
    list-style-type: bengali;
  }
  .homework ul{
    font-size: 30px;
    /* line-height: 40px; */
  }

  .homework h1 {
  }

  .box {
    display: inline-block;
    box-shadow: 3px 3px 0px 6px black;
    padding: 20px;
    background: white;
  }

  .list {
    padding-left: 5rem;
  }

  a {
    color: inherit;
    font-style: italic;
    text-decoration: underline;
  }
  
</style>
