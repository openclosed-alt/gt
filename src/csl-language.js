export const CSL_LANGUAGES = Object.freeze([
  Object.freeze({ code: 'en', label: 'English', htmlLang: 'en' }),
  Object.freeze({ code: 'th', label: 'ไทย', htmlLang: 'th' }),
  Object.freeze({ code: 'ko', label: '한국어', htmlLang: 'ko' }),
  Object.freeze({ code: 'km', label: 'ខ្មែរ', htmlLang: 'km' }),
  Object.freeze({ code: 'de', label: 'Deutsch', htmlLang: 'de' }),
  Object.freeze({ code: 'zh-CN', label: '中文', htmlLang: 'zh-CN' }),
  Object.freeze({ code: 'ja', label: '日本語', htmlLang: 'ja' }),
]);

export const DEFAULT_CSL_LANGUAGE = 'en';

const english = {
  language: 'CSL language', coreSystem: 'CORE SYSTEM', name: 'Coherence Stabilization Loop', lead: 'Detect drift before failure.', canonicalLabel: 'CANONICAL',
  recognition: ['What are you trying to keep stable?', 'What changed?', 'What started drifting?', 'What allowed that drift?', 'What will you change around it?', 'Test it again.'],
  definition: 'The Coherence Stabilization Loop is a recurrent process in which deviation from a maintained reference is observed, Constraint is adjusted, and the relation is re-tested.',
  substance: [
    'A reference is the relation, structure, signal, criterion, semantic boundary, output characteristic, or behavior the current operation is intentionally trying to maintain. It is not assumed to be universally correct, optimal, permanent, or indefinitely viable.',
    'Deviation is difference relative to that reference which matters to the current operation. It does not automatically mean failure, collapse, defect, or incoherence.',
    'Constraint may be tightened, loosened, replaced, removed, altered, or restructured. Narrower Allowance is not inherently better, and adjustment does not prove stabilization.',
    'CSL is an operator architecture. The operator need not be human.',
  ],
  distinctionsTitle: 'OPERATING DISTINCTIONS',
  guardrails: ['Drift is not failure.', 'The thing drifting may not be the thing that is wrong.', 'Tighter is not always better.', 'Adjustment must be re-tested.', 'Sometimes the reference itself should be reconsidered.'],
  principle: 'The maintained structure may not be wrong. The Constraint around it may be allowing the wrong trajectories.',
  enterTrace: 'ENTER CSL TRACE', traceLabel: 'CSL TRACE', traceIntro: 'Work the present stabilization problem against its maintained reference.', returnChamber: 'RETURN TO CHAMBER',
  prompts: {
    reference: 'What relation are you maintaining?', change: 'What changed?', deviation: 'What difference matters relative to the reference?', constraint: 'What constraint may be producing or permitting that trajectory?', adjustment: 'What will you tighten, loosen, replace, remove, alter, or restructure?', retest: 'Under the changed condition, does the maintained relation now hold?',
  },
  examples: {
    reference: 'Example: Preserve a response verbatim.', change: 'Example: New context is introduced.', deviation: 'Example: Extra interpretation begins appearing.', constraint: 'Example: The instruction permits additional expression.', adjustment: 'Example: Restrict output to the requested text only.', retest: 'Example: The response remains verbatim under the changed condition.',
  },
  disposition: 'DISPOSITION', dispositionPrompt: 'Select only after re-testing under the changed condition.',
  dispositions: { stable: 'Stable at present evidence boundary', repeat: 'Deviation remains — repeat', reconsider: 'Reference requires reconsideration' },
  dispositionNotes: { stable: 'Sufficient stabilization at the present evidence boundary. This is not a guarantee of preservation.', repeat: 'Deviation remains. Adjust Constraint, re-test, and repeat the loop.', reconsider: 'The maintained reference itself now requires reconsideration.' },
  clearTrace: 'CLEAR TRACE', clearQuestion: 'CLEAR THIS TRACE?', confirmClear: 'CONFIRM CLEAR', cancel: 'CANCEL',
};

const th = {
  language: 'ภาษา CSL', coreSystem: 'ระบบแกนหลัก', name: 'วงจรรักษาเสถียรภาพของความสอดคล้อง', lead: 'ตรวจจับการเบี่ยงก่อนเกิดความล้มเหลว', canonicalLabel: 'คำมาตรฐาน',
  recognition: ['คุณกำลังพยายามรักษาอะไรให้คงที่?', 'อะไรเปลี่ยนไป?', 'อะไรเริ่มเบี่ยง?', 'อะไรเปิดให้เกิดการเบี่ยงนั้น?', 'คุณจะเปลี่ยนอะไรที่อยู่รอบมัน?', 'ทดสอบอีกครั้ง'],
  definition: 'วงจรรักษาเสถียรภาพของความสอดคล้องเป็นกระบวนการวนซ้ำที่สังเกตการเบี่ยงจากจุดอ้างอิงที่กำลังรักษาไว้ ปรับ Constraint แล้วทดสอบความสัมพันธ์นั้นอีกครั้ง',
  substance: [
    'จุดอ้างอิงคือความสัมพันธ์ โครงสร้าง สัญญาณ เกณฑ์ ขอบเขตความหมาย ลักษณะผลลัพธ์ หรือพฤติกรรมที่การดำเนินงานปัจจุบันตั้งใจรักษาไว้ ไม่ได้ถือว่าถูกต้อง เป็นเลิศ ถาวร หรือใช้ได้ตลอดไปโดยสากล',
    'การเบี่ยงคือความแตกต่างจากจุดอ้างอิงที่มีผลต่อการรักษาเสถียรภาพในขณะนั้น ไม่ได้หมายถึงความล้มเหลว การพังทลาย ข้อบกพร่อง หรือความไม่สอดคล้องโดยอัตโนมัติ',
    'Constraint อาจถูกทำให้เข้มขึ้น ผ่อนลง แทนที่ นำออก เปลี่ยนแปลง หรือจัดโครงสร้างใหม่ ขอบเขตที่แคบกว่าไม่ได้ดีกว่าเสมอ และการปรับไม่ได้พิสูจน์ว่าเกิดเสถียรภาพแล้ว',
    'CSL เป็นสถาปัตยกรรมสำหรับผู้ปฏิบัติ ผู้ปฏิบัติไม่จำเป็นต้องเป็นมนุษย์',
  ],
  distinctionsTitle: 'ข้อแยกแยะในการปฏิบัติ',
  guardrails: ['การเบี่ยงไม่ใช่ความล้มเหลว', 'สิ่งที่กำลังเบี่ยงอาจไม่ใช่สิ่งที่ผิด', 'เข้มงวดขึ้นไม่ได้ดีกว่าเสมอ', 'ต้องทดสอบการปรับอีกครั้ง', 'บางครั้งควรพิจารณาจุดอ้างอิงใหม่'],
  principle: 'โครงสร้างที่กำลังรักษาไว้อาจไม่ได้ผิด แต่ Constraint รอบโครงสร้างนั้นอาจเปิดให้เกิดวิถีที่ไม่ถูกต้อง',
  enterTrace: 'เข้าสู่ CSL TRACE', traceLabel: 'CSL TRACE', traceIntro: 'ดำเนินการกับปัญหาเสถียรภาพปัจจุบันโดยเทียบกับจุดอ้างอิงที่กำลังรักษาไว้', returnChamber: 'กลับสู่ห้อง CSL',
  prompts: { reference: 'คุณกำลังรักษาความสัมพันธ์ใด?', change: 'อะไรเปลี่ยนไป?', deviation: 'ความแตกต่างใดจากจุดอ้างอิงที่มีผล?', constraint: 'Constraint ใดอาจสร้างหรือเปิดให้เกิดวิถีนั้น?', adjustment: 'คุณจะทำให้เข้มขึ้น ผ่อนลง แทนที่ นำออก เปลี่ยน หรือจัดโครงสร้างอะไรใหม่?', retest: 'ภายใต้เงื่อนไขที่เปลี่ยนไป ความสัมพันธ์ที่กำลังรักษาไว้ยังคงอยู่หรือไม่?' },
  examples: { reference: 'ตัวอย่าง: รักษาคำตอบให้ตรงตามข้อความเดิม', change: 'ตัวอย่าง: มีบริบทใหม่เข้ามา', deviation: 'ตัวอย่าง: เริ่มมีการตีความเพิ่มเติม', constraint: 'ตัวอย่าง: คำสั่งเปิดให้มีการแสดงออกเพิ่มเติม', adjustment: 'ตัวอย่าง: จำกัดผลลัพธ์ไว้เฉพาะข้อความที่ขอ', retest: 'ตัวอย่าง: คำตอบยังคงตรงตามข้อความเดิมภายใต้เงื่อนไขที่เปลี่ยนไป' },
  disposition: 'ข้อยุติ', dispositionPrompt: 'เลือกหลังจากทดสอบอีกครั้งภายใต้เงื่อนไขที่เปลี่ยนไปแล้วเท่านั้น',
  dispositions: { stable: 'คงที่ ณ ขอบเขตหลักฐานปัจจุบัน', repeat: 'ยังมีการเบี่ยง — วนซ้ำ', reconsider: 'ต้องพิจารณาจุดอ้างอิงใหม่' },
  dispositionNotes: { stable: 'มีเสถียรภาพเพียงพอ ณ ขอบเขตหลักฐานปัจจุบัน นี่ไม่ใช่การรับประกันว่าจะรักษาไว้ได้', repeat: 'ยังมีการเบี่ยง ปรับ Constraint ทดสอบอีกครั้ง แล้ววนซ้ำ', reconsider: 'ขณะนี้ต้องพิจารณาจุดอ้างอิงที่กำลังรักษาไว้ใหม่' },
  clearTrace: 'ล้าง TRACE', clearQuestion: 'ล้าง TRACE นี้?', confirmClear: 'ยืนยันการล้าง', cancel: 'ยกเลิก',
};

const ko = {
  language: 'CSL 언어', coreSystem: '코어 시스템', name: '일관성 안정화 루프', lead: '실패 전에 표류를 감지합니다.', canonicalLabel: '정식 용어',
  recognition: ['무엇을 안정적으로 유지하려 합니까?', '무엇이 바뀌었습니까?', '무엇이 표류하기 시작했습니까?', '무엇이 그 표류를 허용했습니까?', '그 주변에서 무엇을 바꾸겠습니까?', '다시 시험합니다.'],
  definition: '일관성 안정화 루프는 유지 중인 기준에서의 편차를 관찰하고 Constraint를 조정한 뒤 그 관계를 다시 시험하는 반복 과정입니다.',
  substance: [
    '기준은 현재 작업이 의도적으로 유지하려는 관계, 구조, 신호, 기준점, 의미 경계, 출력 특성 또는 행동입니다. 보편적으로 옳거나 최적이거나 영구적이거나 무기한 유효하다고 가정하지 않습니다.',
    '편차는 현재 안정화 작업에 중요한, 유지 중인 기준과의 차이입니다. 곧바로 실패, 붕괴, 결함 또는 비일관성을 뜻하지 않습니다.',
    'Constraint는 강화하거나 완화하거나 교체하거나 제거하거나 변경하거나 재구성할 수 있습니다. 더 좁은 허용 범위가 본질적으로 더 낫지 않으며, 조정만으로 안정화가 입증되지는 않습니다.',
    'CSL은 운영자 아키텍처입니다. 운영자는 인간일 필요가 없습니다.',
  ],
  distinctionsTitle: '운영 구분',
  guardrails: ['표류는 실패가 아닙니다.', '표류하는 대상이 잘못된 대상이라고 단정할 수 없습니다.', '더 엄격한 것이 항상 더 낫지는 않습니다.', '조정은 반드시 다시 시험해야 합니다.', '때로는 기준 자체를 재검토해야 합니다.'],
  principle: '유지 중인 구조가 잘못된 것이 아닐 수 있습니다. 그 주변의 Constraint가 잘못된 궤적을 허용하고 있을 수 있습니다.',
  enterTrace: 'CSL TRACE 시작', traceLabel: 'CSL TRACE', traceIntro: '현재 안정화 문제를 유지 중인 기준에 대조해 다룹니다.', returnChamber: 'CSL 챔버로 돌아가기',
  prompts: { reference: '어떤 관계를 유지하고 있습니까?', change: '무엇이 바뀌었습니까?', deviation: '기준과 비교해 어떤 차이가 중요합니까?', constraint: '어떤 Constraint가 그 궤적을 만들거나 허용할 수 있습니까?', adjustment: '무엇을 강화, 완화, 교체, 제거, 변경 또는 재구성하겠습니까?', retest: '바뀐 조건에서도 유지하려는 관계가 성립합니까?' },
  examples: { reference: '예: 응답을 원문 그대로 유지한다.', change: '예: 새로운 맥락이 추가된다.', deviation: '예: 추가 해석이 나타나기 시작한다.', constraint: '예: 지시가 추가 표현을 허용한다.', adjustment: '예: 요청된 텍스트만 출력하도록 제한한다.', retest: '예: 바뀐 조건에서도 응답이 원문 그대로 유지된다.' },
  disposition: '처분', dispositionPrompt: '바뀐 조건에서 다시 시험한 뒤에만 선택하세요.',
  dispositions: { stable: '현재 증거 경계에서 안정', repeat: '편차가 남음 — 반복', reconsider: '기준 재검토 필요' },
  dispositionNotes: { stable: '현재 증거 경계에서 충분히 안정화되었습니다. 보존을 보장하지는 않습니다.', repeat: '편차가 남아 있습니다. Constraint를 조정하고 다시 시험한 뒤 루프를 반복하세요.', reconsider: '유지 중인 기준 자체를 이제 재검토해야 합니다.' },
  clearTrace: 'TRACE 지우기', clearQuestion: '이 TRACE를 지울까요?', confirmClear: '지우기 확인', cancel: '취소',
};

const km = {
  language: 'ភាសា CSL', coreSystem: 'ប្រព័ន្ធស្នូល', name: 'វដ្តរក្សាស្ថិរភាពនៃភាពស៊ីសង្វាក់', lead: 'រកឃើញការរសាត់មុនការបរាជ័យ។', canonicalLabel: 'ពាក្យគោល',
  recognition: ['តើអ្នកកំពុងព្យាយាមរក្សាអ្វីឱ្យមានស្ថិរភាព?', 'តើអ្វីបានផ្លាស់ប្តូរ?', 'តើអ្វីចាប់ផ្តើមរសាត់?', 'តើអ្វីបានអនុញ្ញាតឱ្យមានការរសាត់នោះ?', 'តើអ្នកនឹងផ្លាស់ប្តូរអ្វីនៅជុំវិញវា?', 'សាកល្បងម្តងទៀត។'],
  definition: 'វដ្តរក្សាស្ថិរភាពនៃភាពស៊ីសង្វាក់ គឺជាដំណើរការដែលធ្វើឡើងម្តងហើយម្តងទៀត ដោយសង្កេតគម្លាតពីចំណុចយោងដែលកំពុងរក្សា កែសម្រួល Constraint ហើយសាកល្បងទំនាក់ទំនងនោះឡើងវិញ។',
  substance: [
    'ចំណុចយោងគឺជាទំនាក់ទំនង រចនាសម្ព័ន្ធ សញ្ញា លក្ខណៈវិនិច្ឆ័យ ព្រំដែនន័យ លក្ខណៈលទ្ធផល ឬអាកប្បកិរិយាដែលប្រតិបត្តិការបច្ចុប្បន្នមានបំណងរក្សា។ វាមិនត្រូវបានសន្មតថាត្រឹមត្រូវជាសកល ល្អបំផុត អចិន្ត្រៃយ៍ ឬអាចប្រើបានដោយគ្មានកំណត់ទេ។',
    'គម្លាតគឺជាភាពខុសគ្នាធៀបនឹងចំណុចយោងដែលមានសារៈសំខាន់ចំពោះប្រតិបត្តិការរក្សាស្ថិរភាពបច្ចុប្បន្ន។ វាមិនមានន័យថាជាការបរាជ័យ ការដួលរលំ កំហុស ឬភាពមិនស៊ីសង្វាក់ដោយស្វ័យប្រវត្តិទេ។',
    'Constraint អាចត្រូវបានរឹតបន្តឹង បន្ធូរ ជំនួស ដកចេញ កែប្រែ ឬរៀបចំរចនាសម្ព័ន្ធឡើងវិញ។ កម្រិតអនុញ្ញាតតូចជាងមិនមែនល្អជាងជានិច្ចទេ ហើយការកែសម្រួលមិនបញ្ជាក់ថាបានស្ថិរភាពទេ។',
    'CSL គឺជាស្ថាបត្យកម្មសម្រាប់ប្រតិបត្តិករ។ ប្រតិបត្តិករមិនចាំបាច់ជាមនុស្សទេ។',
  ],
  distinctionsTitle: 'ភាពខុសគ្នាសម្រាប់ប្រតិបត្តិការ',
  guardrails: ['ការរសាត់មិនមែនជាការបរាជ័យទេ។', 'អ្វីដែលកំពុងរសាត់អាចមិនមែនជាអ្វីដែលខុសទេ។', 'ការរឹតបន្តឹងមិនតែងតែល្អជាងទេ។', 'ការកែសម្រួលត្រូវតែសាកល្បងឡើងវិញ។', 'ពេលខ្លះ ចំណុចយោងផ្ទាល់ត្រូវការពិចារណាឡើងវិញ។'],
  principle: 'រចនាសម្ព័ន្ធដែលកំពុងរក្សាអាចមិនខុសទេ។ Constraint នៅជុំវិញវាអាចកំពុងអនុញ្ញាតឱ្យមានគន្លងខុស។',
  enterTrace: 'ចូល CSL TRACE', traceLabel: 'CSL TRACE', traceIntro: 'ដំណើរការបញ្ហាស្ថិរភាពបច្ចុប្បន្នធៀបនឹងចំណុចយោងដែលកំពុងរក្សា។', returnChamber: 'ត្រឡប់ទៅបន្ទប់ CSL',
  prompts: { reference: 'តើអ្នកកំពុងរក្សាទំនាក់ទំនងអ្វី?', change: 'តើអ្វីបានផ្លាស់ប្តូរ?', deviation: 'តើភាពខុសគ្នាណាធៀបនឹងចំណុចយោងដែលមានសារៈសំខាន់?', constraint: 'តើ Constraint ណាអាចបង្កើត ឬអនុញ្ញាតគន្លងនោះ?', adjustment: 'តើអ្នកនឹងរឹតបន្តឹង បន្ធូរ ជំនួស ដកចេញ កែប្រែ ឬរៀបចំអ្វីឡើងវិញ?', retest: 'ក្រោមលក្ខខណ្ឌដែលបានផ្លាស់ប្តូរ តើទំនាក់ទំនងដែលកំពុងរក្សានៅតែមានទេ?' },
  examples: { reference: 'ឧទាហរណ៍៖ រក្សាចម្លើយឱ្យដូចអត្ថបទដើម។', change: 'ឧទាហរណ៍៖ បរិបទថ្មីត្រូវបានបន្ថែម។', deviation: 'ឧទាហរណ៍៖ ការបកស្រាយបន្ថែមចាប់ផ្តើមលេចឡើង។', constraint: 'ឧទាហរណ៍៖ សេចក្តីណែនាំអនុញ្ញាតឱ្យមានការបញ្ចេញបន្ថែម។', adjustment: 'ឧទាហរណ៍៖ កំណត់លទ្ធផលត្រឹមអត្ថបទដែលបានស្នើ។', retest: 'ឧទាហរណ៍៖ ចម្លើយនៅតែដូចអត្ថបទដើមក្រោមលក្ខខណ្ឌដែលបានផ្លាស់ប្តូរ។' },
  disposition: 'ការកំណត់ស្ថានភាព', dispositionPrompt: 'ជ្រើសតែបន្ទាប់ពីសាកល្បងឡើងវិញក្រោមលក្ខខណ្ឌដែលបានផ្លាស់ប្តូរ។',
  dispositions: { stable: 'មានស្ថិរភាពនៅព្រំដែនភស្តុតាងបច្ចុប្បន្ន', repeat: 'គម្លាតនៅសល់ — ធ្វើម្តងទៀត', reconsider: 'ចំណុចយោងត្រូវការពិចារណាឡើងវិញ' },
  dispositionNotes: { stable: 'មានស្ថិរភាពគ្រប់គ្រាន់នៅព្រំដែនភស្តុតាងបច្ចុប្បន្ន។ នេះមិនធានាការរក្សាទុកទេ។', repeat: 'គម្លាតនៅសល់។ កែសម្រួល Constraint សាកល្បងឡើងវិញ ហើយធ្វើវដ្តម្តងទៀត។', reconsider: 'ចំណុចយោងដែលកំពុងរក្សា ត្រូវការពិចារណាឡើងវិញឥឡូវនេះ។' },
  clearTrace: 'សម្អាត TRACE', clearQuestion: 'សម្អាត TRACE នេះ?', confirmClear: 'បញ្ជាក់ការសម្អាត', cancel: 'បោះបង់',
};

const de = {
  language: 'CSL-Sprache', coreSystem: 'KERNSYSTEM', name: 'Schleife zur Kohärenzstabilisierung', lead: 'Abdriften vor dem Scheitern erkennen.', canonicalLabel: 'KANONISCH',
  recognition: ['Was versuchen Sie stabil zu halten?', 'Was hat sich verändert?', 'Was begann abzudriften?', 'Was hat dieses Abdriften zugelassen?', 'Was werden Sie darum herum verändern?', 'Erneut prüfen.'],
  definition: 'Die Schleife zur Kohärenzstabilisierung ist ein wiederkehrender Prozess: Eine Abweichung von einer aufrechterhaltenen Referenz wird beobachtet, Constraint wird angepasst und die Beziehung erneut geprüft.',
  substance: [
    'Eine Referenz ist die Beziehung, Struktur, das Signal, Kriterium, die semantische Grenze, Ausgabeeigenschaft oder das Verhalten, das der aktuelle Vorgang bewusst aufrechterhalten soll. Sie gilt nicht automatisch als universell richtig, optimal, dauerhaft oder unbegrenzt tragfähig.',
    'Abweichung ist ein für den aktuellen Stabilisierungsvorgang bedeutsamer Unterschied gegenüber der aufrechterhaltenen Referenz. Sie bedeutet nicht automatisch Scheitern, Zusammenbruch, Defekt oder Inkohärenz.',
    'Constraint kann verschärft, gelockert, ersetzt, entfernt, verändert oder neu strukturiert werden. Ein engerer Spielraum ist nicht grundsätzlich besser, und eine Anpassung beweist keine Stabilisierung.',
    'CSL ist eine Operator-Architektur. Der Operator muss kein Mensch sein.',
  ],
  distinctionsTitle: 'OPERATIVE UNTERSCHEIDUNGEN',
  guardrails: ['Abdriften ist kein Scheitern.', 'Was abdriftet, muss nicht das sein, was falsch ist.', 'Strenger ist nicht immer besser.', 'Eine Anpassung muss erneut geprüft werden.', 'Manchmal muss die Referenz selbst neu betrachtet werden.'],
  principle: 'Die aufrechterhaltene Struktur muss nicht falsch sein. Constraint um sie herum kann die falschen Verläufe zulassen.',
  enterTrace: 'CSL TRACE ÖFFNEN', traceLabel: 'CSL TRACE', traceIntro: 'Das aktuelle Stabilisierungsproblem an seiner aufrechterhaltenen Referenz bearbeiten.', returnChamber: 'ZURÜCK ZUR CSL-KAMMER',
  prompts: { reference: 'Welche Beziehung halten Sie aufrecht?', change: 'Was hat sich verändert?', deviation: 'Welcher Unterschied gegenüber der Referenz ist bedeutsam?', constraint: 'Welches Constraint könnte diesen Verlauf erzeugen oder zulassen?', adjustment: 'Was werden Sie verschärfen, lockern, ersetzen, entfernen, verändern oder neu strukturieren?', retest: 'Besteht die aufrechterhaltene Beziehung unter der veränderten Bedingung jetzt?' },
  examples: { reference: 'Beispiel: Eine Antwort wortgetreu erhalten.', change: 'Beispiel: Neuer Kontext kommt hinzu.', deviation: 'Beispiel: Zusätzliche Interpretation erscheint.', constraint: 'Beispiel: Die Anweisung erlaubt zusätzlichen Ausdruck.', adjustment: 'Beispiel: Die Ausgabe auf den angeforderten Text beschränken.', retest: 'Beispiel: Die Antwort bleibt unter der veränderten Bedingung wortgetreu.' },
  disposition: 'DISPOSITION', dispositionPrompt: 'Erst nach erneuter Prüfung unter der veränderten Bedingung auswählen.',
  dispositions: { stable: 'An der aktuellen Evidenzgrenze stabil', repeat: 'Abweichung bleibt — wiederholen', reconsider: 'Referenz muss neu betrachtet werden' },
  dispositionNotes: { stable: 'An der aktuellen Evidenzgrenze ausreichend stabilisiert. Dies ist keine Garantie der Erhaltung.', repeat: 'Abweichung bleibt. Constraint anpassen, erneut prüfen und die Schleife wiederholen.', reconsider: 'Die aufrechterhaltene Referenz selbst muss jetzt neu betrachtet werden.' },
  clearTrace: 'TRACE LEEREN', clearQuestion: 'DIESEN TRACE LEEREN?', confirmClear: 'LEEREN BESTÄTIGEN', cancel: 'ABBRECHEN',
};

const zhCN = {
  language: 'CSL 语言', coreSystem: '核心系统', name: '一致性稳定循环', lead: '在失败前识别偏移。', canonicalLabel: '规范术语',
  recognition: ['你想让什么保持稳定？', '什么发生了变化？', '什么开始偏移？', '什么允许了这种偏移？', '你要改变它周围的什么？', '再次测试。'],
  definition: '一致性稳定循环是一个反复过程：观察相对于所维持参照的偏差，调整 Constraint，再重新测试该关系。',
  substance: [
    '参照是当前操作有意维持的关系、结构、信号、标准、语义边界、输出特征或行为。它不被假定为普遍正确、最优、永久或可无限维持。',
    '偏差是相对于所维持参照、且对当前稳定操作有意义的差异。它并不自动意味着失败、崩溃、缺陷或不一致。',
    'Constraint 可以收紧、放宽、替换、移除、改变或重构。更窄的允许范围并不天然更好，调整本身也不能证明已经稳定。',
    'CSL 是一种操作者架构。操作者不必是人。',
  ],
  distinctionsTitle: '操作区分',
  guardrails: ['偏移并不等于失败。', '发生偏移的对象未必就是错误所在。', '更严格并不总是更好。', '调整之后必须重新测试。', '有时需要重新考虑参照本身。'],
  principle: '所维持的结构未必有错。它周围的 Constraint 可能允许了错误的轨迹。',
  enterTrace: '进入 CSL TRACE', traceLabel: 'CSL TRACE', traceIntro: '依据所维持的参照，处理当前的稳定问题。', returnChamber: '返回 CSL 界面',
  prompts: { reference: '你正在维持什么关系？', change: '什么发生了变化？', deviation: '相对于参照，哪种差异是重要的？', constraint: '哪个 Constraint 可能正在产生或允许那条轨迹？', adjustment: '你要收紧、放宽、替换、移除、改变或重构什么？', retest: '在变化后的条件下，所维持的关系现在成立吗？' },
  examples: { reference: '示例：逐字保持一段回复。', change: '示例：引入了新的上下文。', deviation: '示例：开始出现额外解释。', constraint: '示例：指令允许额外表达。', adjustment: '示例：将输出限制为仅包含所请求的文本。', retest: '示例：在变化后的条件下，回复仍保持原文。' },
  disposition: '处置', dispositionPrompt: '仅在变化后的条件下重新测试后选择。',
  dispositions: { stable: '在当前证据边界下稳定', repeat: '偏差仍存在——重复', reconsider: '参照需要重新考虑' },
  dispositionNotes: { stable: '在当前证据边界下已充分稳定。这并不保证能够维持。', repeat: '偏差仍存在。调整 Constraint，重新测试并重复循环。', reconsider: '现在需要重新考虑所维持的参照本身。' },
  clearTrace: '清除 TRACE', clearQuestion: '清除此 TRACE？', confirmClear: '确认清除', cancel: '取消',
};

const ja = {
  language: 'CSL の言語', coreSystem: 'コアシステム', name: '一貫性安定化ループ', lead: '失敗の前にドリフトを検知する。', canonicalLabel: '正規用語',
  recognition: ['何を安定したまま保とうとしているか？', '何が変わったか？', '何がドリフトし始めたか？', '何がそのドリフトを許したか？', 'その周囲の何を変えるか？', 'もう一度テストする。'],
  definition: '一貫性安定化ループは、維持している参照からの偏差を観察し、Constraint を調整し、その関係を再テストする反復プロセスである。',
  substance: [
    '参照とは、現在の運用が意図的に維持しようとしている関係、構造、信号、基準、意味境界、出力特性、または振る舞いである。それが普遍的に正しい、最適、恒久的、または無期限に有効だとは仮定しない。',
    '偏差とは、維持している参照との差のうち、現在の安定化運用にとって重要なものである。偏差は自動的に失敗、崩壊、欠陥、または不整合を意味しない。',
    'Constraint は、強める、緩める、置き換える、取り除く、変更する、または再構成できる。許容範囲が狭いこと自体が優れているわけではなく、調整だけでは安定化を証明できない。',
    'CSL はオペレーター・アーキテクチャである。オペレーターは人間である必要はない。',
  ],
  distinctionsTitle: '運用上の区別',
  guardrails: ['ドリフトは失敗ではない。', 'ドリフトしているもの自体が誤りとは限らない。', '厳しくすればよいとは限らない。', '調整後は必ず再テストする。', '参照そのものを見直すべき場合もある。'],
  principle: '維持している構造が誤っているとは限らない。その周囲の Constraint が、誤った軌道を許している可能性がある。',
  enterTrace: 'CSL TRACE を開始', traceLabel: 'CSL TRACE', traceIntro: '現在の安定化問題を、維持している参照に照らして扱う。', returnChamber: 'CSL チャンバーに戻る',
  prompts: { reference: 'どの関係を維持しているか？', change: '何が変わったか？', deviation: '参照との差のうち、何が重要か？', constraint: 'どの Constraint が、その軌道を生み出すか許している可能性があるか？', adjustment: '何を強め、緩め、置き換え、取り除き、変更し、または再構成するか？', retest: '変化後の条件でも、維持している関係は成立するか？' },
  examples: { reference: '例：応答を原文どおりに保つ。', change: '例：新しい文脈が加わる。', deviation: '例：余分な解釈が現れ始める。', constraint: '例：指示が追加表現を許している。', adjustment: '例：出力を要求されたテキストだけに制限する。', retest: '例：条件が変わっても、応答は原文どおりに保たれる。' },
  disposition: '判定', dispositionPrompt: '変化後の条件で再テストしてから選択する。',
  dispositions: { stable: '現在の証拠境界では安定', repeat: '偏差が残る — 反復', reconsider: '参照の再検討が必要' },
  dispositionNotes: { stable: '現在の証拠境界では十分に安定している。維持を保証するものではない。', repeat: '偏差が残っている。Constraint を調整し、再テストして、ループを繰り返す。', reconsider: '維持している参照そのものを、いま再検討する必要がある。' },
  clearTrace: 'TRACE をクリア', clearQuestion: 'この TRACE をクリアする？', confirmClear: 'クリアを確定', cancel: 'キャンセル',
};

const translations = Object.freeze({ en: english, th, ko, km, de, 'zh-CN': zhCN, ja });

export function getCSLLanguage(code) {
  return CSL_LANGUAGES.find((language) => language.code === code) ?? CSL_LANGUAGES[0];
}

export function getCSLCopy(code) {
  return translations[getCSLLanguage(code).code];
}

export function selectCSLLanguage(code, activeTrace) {
  return { language: getCSLLanguage(code).code, activeTrace };
}
