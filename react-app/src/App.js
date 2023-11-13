import { Component } from "react";
import Content from "./components/Content";
import TOC from "./components/TOC";
import Subject from "./components/Subject";

import 웰컴 from "./img/웰컴.png";
import BeatlesImg from "./img/Beatlesinliverpool.png";
import 머지사이드 from "./img/머지사이드.png";
import 성당 from "./img/성당.png";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 1,
      subject: { title: "리버풀", sub: "지역 문화에 대해 설명하겠습니다!" },
      welcome: { title: "한국에서 찾아볼 수 있는 리버풀?", desc: "잉글랜드 서부 머지사이드 주에 위치한 공업 도시이자 항구 도시입니다. 우리가 주로 알고있는 맨체스터에서는 서쪽으로 50km 떨어져 있습니다. 지도에서의 위치만 본다면 맨체스터가 서울, 리버풀은 인천과 비슷한 입지에 있습니다! 19세기에는 세계 물동량의 절반이 리버풀 항구를 거쳤을 만큼 세계적인 무역항을 갖춘 도시였습니다. 산업혁명 때부터 영국 공업의 중추적인 역할을 담당했으나 2차 세계대전으로 시설이 많이 파괴되었고 전후 복구도 더뎠습니다. 공업의 대세가 석탄에서 석유로 옮겨간 뒤 부터 급속하게 쇠퇴하였으나 도시 재생 사업을 진행하면서  인구도 많이 늘었고, 경제도 대폭 성장하게 되었습니다. 현재는 유럽에서 문화 관광 도시로 자리잡았으며, 'Liverpool One'이란 시티 센터가 생기면서 영국 내 치안도 손꼽힐 정도로 좋아졌습니다. ", image: 웰컴 },
      contents: [
        { id: 1, title: "비틀즈", desc: "이 페이지에서는 비틀즈의 고향인 리버풀과 연관있는 것을 다루려고 합니다. There are places I'll remember, All my life Though some have changed. Some forever not for better, Some have gone and some remain. 살면서 추억할 장소들이 있어요 몇 곳은 변해버렸지만 몇 곳은 영원하죠, 더 나아졌다고 할 수는 없지만 몇 곳은 사라졌지만 그대로 남아 있는 곳도 있죠.  이 노래는 비틀즈의 In My Life라는 곡으로 존 레논이 어릴 적 살았던 리버풀의 향수를 다룬 곡입니다. 그 외에 Penny Lane도 리버풀 교외의 거리를 묘사한 곡이라고 합니다. 리버풀에는 비틀즈 멤버의 이름을 딴 존 레논 공항이 있습니다. 영국 내에서는 처음으로 사람 이름이 공항에 붙은 사례라고 하니, 리버풀 사람들이 얼마나 비틀즈를 사랑하는지 알 수 있는 일입니다.  ", image: BeatlesImg },
        { id: 2, title: "머지사이드 더비", desc: "잉글랜드 머지사이드 주 리버풀에 연고지를 두고 있는 프로 축구 명문 클럽인 에버튼 FC와 리버풀 FC 간의 로컬 더비 경기입니다. 아래 사진에서 보다시피 두 팀의 홈구장은 공원 하나만을 사이에 두고 있을 정도로 정말 가깝습니다. 일반적으로 머지사이드 더비는 프렌들리 더비(The Friendly Derby)라고 평가받는데, 가족끼리도 서로 에버튼 서포터와 리버풀 서포터로 나뉘기 때문에 머지사이드 더비는 과격성이 난무하는 프리미어 리그 팬 문화에서 이 정도로 서로를 존중해주는 모습을 보여주는 몇 안되는 더비로 알려져 있으며, 자선 더비 경기까지 치르는 걸 보면 확실히 프렌들리하기는 하다고 느껴질 수는 있다. 더비 매치 특유의 폭력적인 분위기가 형성되지 않는다고 알려진 것과는 달리 실제로는 전혀 그렇지 않으며, 오히려 프리미어 리그의 더비 매치 중에서 옐로카드는 물론 레드카드가 제일 많이 나오는 더비이다 ", image: 머지사이드 },
        { id: 3, title: "리버풀 대성당과 메트로폴리탄 대성당", desc: "리버풀 대성당은 영국 성공회를 대표하며 현대식 건출물로 만들어진 리버풀 메트로폴리탄 대성당은 로만 가톨릭을 대표한다고 합니다. 로만 가톨릭 성당이 지어지게 된 계기는 아일랜드 대기근 때문이라고 합니다. 그 이유는 집단적인 해외 이주로 인해 리버풀의 가톨릭 인구가 늘어났기 때문이라고 합니다.안으로 들어가면 동그란 예배당이 있고 천장이 높은 돔으로 처리가 되어있습니다. 그리고 가운데에 제단이 있고, 주변을 신자들이 앉을 의자들이 둘러싸고 있다는 특징이 있습닏. 중앙 집중식으로 보기 좋다는 이점이 있으니 여행한다면 이곳을 방문하여 건축물 자체의 美를 즐기시길 바랍니다.", image: 성당 },
        
      ],
    };
  }
  render() {
    var _title,
      _desc,
      _image = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _image = this.state.welcome.image;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          _image = data.image;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }.bind(this)}
        ></TOC>
        <Content title={_title} desc={_desc} img={_image}></Content>
      </div>
    );
  }
}

export default App;