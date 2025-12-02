import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "m24 - 당신의 경험을 기록하고, AI와 대화하세요" },
    {
      name: "description",
      content:
        "음성으로 기록하고, 텍스트로 변환하고, AI와 대화하며 나의 경험을 돌아보세요. m24와 함께 일상을 더 의미있게 기록하세요.",
    },
  ];
}

// Icons as inline SVG components
function MicrophoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
      />
    </svg>
  );
}

function DocumentTextIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  );
}

function ChatBubbleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
      />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

// Header Component
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/logo.svg" alt="m24" className="h-16" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              기능
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              사용 방법
            </a>
            <a
              href="#faq"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              FAQ
            </a>
            <a
              href="#download"
              className="px-4 py-2 rounded-full bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
            >
              앱 다운로드
            </a>
          </nav>
          <a
            href="#download"
            className="md:hidden px-4 py-2 rounded-full bg-primary-500 text-white text-sm font-medium"
          >
            다운로드
          </a>
        </div>
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              당신의 경험을
              <br />
              <span className="gradient-text">기록하고, 대화하세요</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
              음성으로 기록하고, 텍스트로 변환하고, AI와 대화하며 나의 경험을
              돌아보세요. 일상을 더 의미있게 기록하는 새로운 방법.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play에서 다운로드
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="phone-mockup w-64 sm:w-72">
              <div className="phone-screen aspect-[9/19] flex flex-col">
                {/* Status bar mockup */}
                <div className="h-6 bg-gray-100 flex items-center justify-between px-4">
                  <span className="text-[10px] text-gray-600">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                    <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                  </div>
                </div>
                {/* App content mockup */}
                <div className="flex-1 p-4 flex flex-col">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto rounded-full gradient-hero flex items-center justify-center mb-2">
                      <MicrophoneIcon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-xs text-gray-500">녹음 준비 완료</p>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-[10px] text-gray-500">
                          오늘 오후 3:24
                        </span>
                      </div>
                      <p className="text-xs text-gray-700">
                        오늘 카페에서 친구를 만났는데...
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-[10px] text-gray-500">
                          어제 오전 10:15
                        </span>
                      </div>
                      <p className="text-xs text-gray-700">
                        새로운 프로젝트 아이디어가...
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <span className="text-[10px] text-gray-500">
                          2일 전
                        </span>
                      </div>
                      <p className="text-xs text-gray-700">
                        주말에 산책하면서 느낀 점...
                      </p>
                    </div>
                  </div>
                  {/* Bottom nav mockup */}
                  <div className="flex justify-around pt-3 border-t border-gray-200 mt-2">
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    <div className="w-10 h-10 -mt-4 rounded-full gradient-hero flex items-center justify-center">
                      <MicrophoneIcon className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: MicrophoneIcon,
      title: "언제 어디서나, 당신의 이야기를 녹음하세요",
      description:
        "사용자가 원할 때 자유롭게 음성 녹음. 버튼 한 번으로 간편하게 시작하고, 일상의 경험, 생각, 감정을 음성으로 기록하세요.",
      points: [
        "버튼 한 번으로 간편하게 시작",
        "일상의 경험, 생각, 감정을 음성으로 기록",
        "모든 녹음 파일은 안전하게 보관",
      ],
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: DocumentTextIcon,
      title: "녹음된 내용이 자동으로 텍스트가 됩니다",
      description:
        "AI 기반 자동 텍스트 변환으로 높은 정확도의 음성 인식을 제공합니다. 변환된 텍스트는 검색하고 편집할 수 있습니다.",
      points: [
        "AI 기반 자동 텍스트 변환",
        "높은 정확도의 음성 인식",
        "변환된 텍스트 검색 및 편집 가능",
      ],
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: ChatBubbleIcon,
      title: "AI와 대화하며 나의 경험을 돌아보세요",
      description:
        "기록된 경험에 대해 AI와 자유롭게 대화하세요. 나의 경험 패턴, 감정, 인사이트를 발견하고 개인화된 대화형 경험을 제공받으세요.",
      points: [
        "기록된 경험에 대해 AI와 자유롭게 대화",
        "나의 경험 패턴, 감정, 인사이트 발견",
        "채팅 기록 저장 및 다시 보기",
      ],
      color: "from-orange-500 to-amber-400",
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            핵심 기능
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            m24의 세 가지 핵심 기능으로 당신의 경험을 더 깊이
            기록하고 이해하세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "녹음하기",
      description: "버튼 하나로 당신의 이야기를 녹음하세요. 일상의 모든 순간을 음성으로 기록합니다.",
      icon: MicrophoneIcon,
    },
    {
      number: "02",
      title: "텍스트 변환",
      description: "AI가 녹음된 내용을 자동으로 텍스트로 변환합니다. 정확하고 빠르게 처리됩니다.",
      icon: DocumentTextIcon,
    },
    {
      number: "03",
      title: "AI와 대화",
      description: "변환된 기록을 바탕으로 AI와 대화하며 인사이트를 발견하세요.",
      icon: ChatBubbleIcon,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            사용 방법
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            세 단계로 간단하게 시작하세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Step number badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 mb-4">
                <span className="text-lg font-bold text-primary-600 dark:text-primary-300">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-hero mb-6">
                <step.icon className="w-10 h-10 text-white" />
              </div>

              {/* Title and description */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>

              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-24 -right-6 lg:-right-8 items-center justify-center w-12 h-12">
                  <ArrowRightIcon className="w-6 h-6 text-primary-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// App Screenshots Section
function AppScreenshotsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            앱 미리보기
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            직관적이고 아름다운 인터페이스로 경험을 기록하세요
          </p>
        </div>

        <div className="flex justify-center gap-6 lg:gap-8">
          {/* Recording Screen */}
          <div className="phone-mockup w-48 sm:w-56 lg:w-64 transform -rotate-6">
            <div className="phone-screen aspect-[9/19] p-4 flex flex-col items-center justify-center">
              <div className="w-24 h-24 rounded-full gradient-hero flex items-center justify-center mb-4 shadow-lg">
                <MicrophoneIcon className="w-12 h-12 text-white" />
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mb-2">
                <div className="w-2/3 h-2 gradient-hero rounded-full"></div>
              </div>
              <p className="text-xs text-gray-500">02:34</p>
              <p className="text-sm font-medium text-gray-700 mt-2">녹음 중...</p>
            </div>
          </div>

          {/* Text View Screen */}
          <div className="phone-mockup w-48 sm:w-56 lg:w-64 transform translate-y-4">
            <div className="phone-screen aspect-[9/19] p-4 flex flex-col">
              <div className="text-center mb-3">
                <p className="text-xs text-gray-500">오늘 오후 3:24</p>
                <p className="text-sm font-medium text-gray-700">일상 기록</p>
              </div>
              <div className="flex-1 bg-white rounded-lg p-3 shadow-sm text-xs text-gray-600 leading-relaxed">
                오늘 카페에서 친구를 만났다. 오랜만에 만나서 이런저런 이야기를
                나눴는데, 특히 최근 시작한 새 프로젝트에 대해 많은 조언을
                받았다. 정말 도움이 되는 시간이었다...
              </div>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 py-2 text-xs bg-gray-100 rounded-lg text-gray-600">
                  편집
                </button>
                <button className="flex-1 py-2 text-xs gradient-hero rounded-lg text-white">
                  AI 채팅
                </button>
              </div>
            </div>
          </div>

          {/* Chat Screen */}
          <div className="phone-mockup w-48 sm:w-56 lg:w-64 transform rotate-6">
            <div className="phone-screen aspect-[9/19] p-4 flex flex-col">
              <div className="text-center mb-3">
                <p className="text-sm font-medium text-gray-700">AI 대화</p>
              </div>
              <div className="flex-1 space-y-2 overflow-hidden">
                <div className="bg-gray-100 rounded-lg rounded-tl-none p-2 text-xs text-gray-700 max-w-[80%]">
                  오늘 기록을 분석해봤어요. 친구와의 만남이 긍정적인 영향을 준
                  것 같네요.
                </div>
                <div className="bg-primary-500 rounded-lg rounded-tr-none p-2 text-xs text-white max-w-[80%] ml-auto">
                  그랬어요! 어떤 부분이 특히 좋았을까요?
                </div>
                <div className="bg-gray-100 rounded-lg rounded-tl-none p-2 text-xs text-gray-700 max-w-[80%]">
                  새 프로젝트에 대한 조언을 받으며 자신감을 얻은 것 같아요.
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <input
                  type="text"
                  placeholder="메시지 입력..."
                  className="flex-1 py-2 px-3 text-xs bg-gray-100 rounded-full"
                  readOnly
                />
                <button className="w-8 h-8 rounded-full gradient-hero flex items-center justify-center">
                  <ArrowRightIcon className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Download Section
function DownloadSection() {
  return (
    <section id="download" className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="gradient-hero rounded-3xl p-8 lg:p-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            지금 시작하세요
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
            m24와 함께 일상을 더 의미있게 기록하세요. 무료로
            다운로드하고 당신만의 경험 기록을 시작하세요.
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">GET IT ON</div>
                <div className="text-lg font-bold -mt-1">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "m24는 무료인가요?",
      answer:
        "기본 기능은 무료로 사용할 수 있습니다. 더 많은 저장 공간과 고급 AI 기능을 원하시면 프리미엄 플랜을 이용하실 수 있습니다.",
    },
    {
      question: "녹음 파일은 어디에 저장되나요?",
      answer:
        "모든 녹음 파일은 암호화되어 안전한 클라우드 서버에 저장됩니다. 사용자 본인만 접근할 수 있으며, 언제든지 다운로드하거나 삭제할 수 있습니다.",
    },
    {
      question: "음성 인식 정확도는 어느 정도인가요?",
      answer:
        "최신 AI 음성 인식 기술을 사용하여 95% 이상의 정확도를 제공합니다. 한국어는 물론 영어, 일본어 등 다양한 언어를 지원합니다.",
    },
    {
      question: "AI 대화는 어떻게 작동하나요?",
      answer:
        "변환된 텍스트를 기반으로 AI가 당신의 경험을 분석하고, 패턴을 발견하며, 의미 있는 인사이트를 제공합니다. 마치 개인 코치와 대화하는 것처럼 자연스럽게 상호작용할 수 있습니다.",
    },
    {
      question: "오프라인에서도 사용할 수 있나요?",
      answer:
        "녹음 기능은 오프라인에서도 사용 가능합니다. 텍스트 변환과 AI 대화는 인터넷 연결이 필요하며, 연결되면 자동으로 동기화됩니다.",
    },
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            자주 묻는 질문
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            궁금한 점이 있으신가요?
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                <span className="font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDownIcon className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0" />
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/logo.svg" alt="m24" className="h-20 invert" />
            </div>
            <p className="text-gray-400 max-w-md">
              당신의 경험을 기록하고, 텍스트로 변환하고, AI와 대화하세요. 일상을
              더 의미있게 기록하는 새로운 방법을 경험하세요.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">서비스</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  기능 소개
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  사용 방법
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-white transition-colors">
                  앱 다운로드
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">회사</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  회사 소개
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  이용약관
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  고객센터
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2024 m24. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@m24ai.com"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              contact@m24ai.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Home Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <AppScreenshotsSection />
        <DownloadSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
