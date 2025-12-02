import type { Route } from "./+types/terms";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "이용약관 - m24" },
    { name: "description", content: "m24 서비스 이용약관" },
  ];
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center">
              <img src="/logo.svg" alt="m24" className="h-16" />
            </a>
            <a
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              홈으로
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">서비스 이용약관</h1>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Memento AI Inc(이하 "회사")가 운영하는 AI 기반 개인 비서 서비스 "M24"(이하 "서비스")의 이용에 관한 조건을 규정합니다.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 font-semibold">
              본 약관은 2025년 12월 1일부터 시행됩니다.
            </p>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">제1조 (정의)</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>"서비스": 회사가 제공하는 음성 녹음, AI 분석, 전사 및 요약 서비스</li>
                <li>"회원": 본 약관에 동의하고 가입 절차를 완료한 개인 또는 법인</li>
                <li>"전사 기록": 음성을 텍스트로 변환한 데이터</li>
                <li>"콘텐츠": 회원이 서비스를 통해 생성하거나 업로드한 모든 자료</li>
              </ol>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">제2조 (약관의 효력)</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>본 약관은 회원가입 시점부터 효력이 발생합니다.</li>
                <li>약관 개정 시 최소 7일 전에 이메일 또는 서비스 내 공지를 통해 안내합니다.</li>
                <li>개정 약관에 동의하지 않는 경우 회원 탈퇴가 가능합니다.</li>
                <li>본 약관에 명시되지 않은 사항은 관련 법령 및 개인정보 처리방침에 따릅니다.</li>
              </ol>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">제3조 (서비스 내용)</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">회사는 다음 기능을 제공합니다:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                <li>음성 녹음 및 AI 기반 전사(텍스트 변환)</li>
                <li>전사 기록의 분석 및 요약</li>
                <li>캘린더 연동 및 일정 관리</li>
                <li>생성된 콘텐츠의 저장 및 조회</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300">서비스 기능의 변경 또는 중단 시 사전 공지합니다.</p>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">제4조 (회원가입)</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>가입 신청 시 제공하는 정보는 정확해야 하며, 허위 정보로 인한 불이익은 회원이 부담합니다.</li>
                <li>개인 및 법인 모두 가입 가능하며, 법인의 경우 권한 있는 자가 가입해야 합니다.</li>
                <li>EU 거주자는 GDPR 규정으로 인해 현재 서비스 이용이 제한됩니다.</li>
              </ol>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">제5조 (회원의 의무)</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>관련 법령 및 본 약관을 준수해야 합니다.</li>
                <li>계정 정보를 안전하게 관리하며, 관리 소홀로 인한 문제는 회원이 책임집니다.</li>
                <li>서비스를 통해 생성된 데이터를 무단으로 제3자에게 제공하거나 유출할 수 없습니다.</li>
              </ol>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">제6조 (회사의 의무)</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>안정적인 서비스 제공을 위해 노력합니다.</li>
                <li>회원 데이터의 보안을 위해 기술적, 관리적 조치를 시행합니다.</li>
                <li>회원의 의견을 수렴하여 서비스 개선에 반영합니다.</li>
              </ol>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">제7조 (데이터 처리)</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>음성 데이터는 전사(텍스트 변환) 후 원본 파일을 저장하지 않습니다.</li>
                <li>전사 기록은 서비스 종료 또는 회원 탈퇴 시까지 보관됩니다.</li>
                <li>회사는 AI 기술을 활용하여 음성을 분석하고 텍스트로 변환하며, 회원은 가입 시 이에 동의한 것으로 간주됩니다.</li>
                <li>법령에서 정한 보존 기간이 있는 경우 해당 기간 동안 보관 후 파기합니다.</li>
              </ol>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">제8조 (결제)</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>유료 서비스 이용 시 회사가 정한 요금을 결제해야 합니다.</li>
                <li>구독은 만료 시 자동 갱신되며, 갱신을 원치 않는 경우 종료일 24시간 전까지 해제해야 합니다.</li>
                <li>결제 미납 시 서비스 이용이 제한될 수 있습니다.</li>
                <li>해지 후에도 결제된 구독 기간 동안은 서비스를 이용할 수 있습니다.</li>
              </ol>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">제9조 (서비스 이용제한)</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>약관 또는 법령 위반 시 사전 통지 후 이용을 제한할 수 있습니다.</li>
                <li>긴급한 경우 사후 통지할 수 있으며, 회원은 이의를 제기할 수 있습니다.</li>
              </ol>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">제10조 (계약 해지)</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>회원은 언제든지 해지를 요청할 수 있습니다.</li>
                <li>해지 후 30일간 데이터 다운로드 기회를 제공하며, 이후 삭제됩니다.</li>
              </ol>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">제11조 (지식재산권)</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>서비스 및 회사가 제작한 콘텐츠의 지적재산권은 회사에 귀속됩니다.</li>
                <li>회원은 생성된 콘텐츠에 대해 비독점적 사용권을 가지며, 회사 동의 없이 복제, 배포, 개작할 수 없습니다.</li>
              </ol>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">제12조 (면책)</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>천재지변, 해킹 등 불가항력적 사유로 인한 서비스 중단에 대해 책임지지 않습니다.</li>
                <li>회원의 귀책사유로 인한 손해는 회원이 부담합니다.</li>
                <li>무료 서비스 관련 손해에 대해서는 책임지지 않습니다. 단, 회사의 고의 또는 중과실의 경우는 예외입니다.</li>
              </ol>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">제13조 (준거법 및 분쟁해결)</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>본 약관은 대한민국 법률에 따라 해석됩니다.</li>
                <li>분쟁 발생 시 회사와 회원이 우선 협의하며, 협의 불성립 시 회사 소재지 관할 법원에서 해결합니다.</li>
              </ol>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}
