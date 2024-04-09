var url = 'http://rap2api.taobao.org/app/mock/315698/chen3';
       
        fetch(url).then(data => {
            return data.json();
        }).then(data => {
            console.log(data);
            parse(data);
        }).catch(e => {
            console.log(e);
        });

        function parse(data) {
            var jlist = document.querySelector(".jlist");

            for (let v of data) {
                let li = document.createElement("li");// 创建一个li
                li.innerHTML = `
                 <img src="./images/${v.img}" />  
            <div class="title">
            <h3><a href="${v.link}">${v.title}</a></h3>
            <h4><span1 class="sketch">${v.sketch}</span1></h4>
            <span class="type">${v.type}</span>
            <span class="author">${v.author}</span> 
        </div>
        `;
                jlist.appendChild(li);
            }
        }
        
        var swiper2 = new Swiper(".s2", {
          direction: "vertical",
          autoplay: {
            delay:2000,
            disableOnInteraction: false,
          },
        });
        var swiper = new Swiper(".s3", {
                  autoplay: {
                      delay: 2500,
                      disableOnInteraction: false,
                  },
                  pagination: {
                      el: ".swiper-pagination",
                  },
              });
  
              var swiper = new Swiper(".s4", {
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
        },
      });
      var swiper3 = new Swiper(".s5", {
          slidesPerView: 3,
          spaceBetween: 5,
        });