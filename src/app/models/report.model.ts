export interface Report {
  id: number;
  screening_case_id: number;
  generated_by: number;
  report_type: string;
  status: string;
  file_path?: string;
}
