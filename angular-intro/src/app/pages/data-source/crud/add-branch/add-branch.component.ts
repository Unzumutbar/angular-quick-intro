import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Branch } from 'src/app/models/branch';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.scss']
})
export class AddBranchComponent implements OnInit {
  public branchAddForm: FormGroup = this.fb.group({
    id: [''],
    name: [''],
    active: [''],
  });

  constructor(
    private fb: FormBuilder,
    private branchService: BranchService,
    private router: Router,
  ) { }

  public async ngOnInit(): Promise<void> {
    this.branchAddForm.patchValue(new Branch());
  }

  public async addBranch() {
    const branches = await this.branchService.getAll();
    const maxId = Math.max.apply(Math, branches.map(o => o.id));

    const newBranch = this.branchAddForm.value as Branch;
    newBranch.id = maxId + 1;

    await this.branchService.add(newBranch);
    this.router.navigate(['/data-source']);
  }

  public cancel() {
    this.router.navigate(['/data-source']);
  }
}
