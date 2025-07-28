# text-anim-lib

> React에서 사용할 수 있는 쉽고 가벼운 텍스트 애니메이션 컴포넌트 라이브러리

[![npm version](https://img.shields.io/npm/v/text-anim-lib)](https://www.npmjs.com/package/text-anim-lib)
[![license](https://img.shields.io/npm/l/text-anim-lib)](LICENSE)

---

## 특징

- **문자/단어/줄 단위**로 애니메이션 적용
- **Fade, Slide** 등 다양한 프리셋 제공
- **props만으로 다양한 효과** 커스터마이즈 가능
- TypeScript 지원, 가벼운 의존성
- 추후 다양한 애니메이션 추가 예정

---

## 설치 방법

```bash
npm install text-anim-lib
# 필수 peer dependencies
npm install react react-dom framer-motion
```

---

## 사용 예시

```tsx
import { AnimatedText } from "text-anim-lib";

export default function Demo() {
  return (
    <div>
      <AnimatedText
        text="Welcome to My Library"
        preset="fade"
        split="character"
        unitStagger={0.03}
        startDelay={0}
      />

      <AnimatedText
        text="Beautiful Transitions"
        preset="slide"
        split="word"
        unitStagger={0.08}
        lineStagger={0.5}
        startDelay={0.2}
      />
    </div>
  );
}
```
