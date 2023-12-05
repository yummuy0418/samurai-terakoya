   $(window).on('load', () => {
    console.log('loadイベントが発生しました');
  });

  $(document).on('scroll', () => {
    console.log('scrollイベントが発生しました');
  });
const test = $(document);

console.log(test);